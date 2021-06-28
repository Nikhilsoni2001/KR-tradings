import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { db } from "../../Firebase";

const Product = ({ id, title, image, description, price, bestseller }) => {
  const getUid = () => {
    const temp = JSON.parse(localStorage.getItem("user"));

    return temp.uid;
  };

  const addToCart = () => {
    const cartItem = db
      .collection(`users`)
      .doc(getUid())
      .collection("cart")
      .doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        cartItem.set({
          id: id,
          title: title,
          image: image,
          description: description,
          price: price,
          quantity: 1,
          bestseller: bestseller,
        });
      }
    });
  };

  return (
    <Container>
      <ImageContainer>
        <ProductImage src={image} />
      </ImageContainer>
      <AboutProd>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </AboutProd>
      <Description>{description}</Description>
      <Order onClick={addToCart}>
        <AddText>Add To Cart</AddText>

        <ShoppingCartIcon />
      </Order>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 8px;
  width: 300px;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const ProductImage = styled.img`
  height: 300px;
`;

const AboutProd = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Price = styled.p`
  margin-left: 5px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 2px;

  :before {
    content: "Rs.";
  }
`;
const Description = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
  color: #616161;
`;
const Order = styled.div`
  border-top: 1px solid #616161;
  display: flex;
  align-items: center;
  margin: 8px 0;
  cursor: pointer;
  padding-top: 4px;
  justify-content: space-between;
  color: #616161;
  :hover {
    color: #3f51b5;
  }
`;

const AddText = styled.p`
  font-size: 0.8rem;
`;
