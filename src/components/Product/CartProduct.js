import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../Firebase";

const CartProduct = ({
  key,
  id,
  quantity,
  title,
  price,
  image,
  description,
}) => {
  const [qnt, setQnt] = useState(quantity);
  const array = new Array(20);
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }

  const handleChange = (event) => {
    setQnt(event.target.value);
    db.collection("cart").doc(id).set({
      title: title,
      quantity: event.target.value,
      description: description,
      price: price,
      image: image,
      id: id,
    });
  };

  return (
    <Container>
      <LeftContainer>
        <ProductImage src={image} />
      </LeftContainer>
      <MiddleContainer>
        <AboutSection>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </AboutSection>
        <Price>{price}</Price>

        <Quantity>
          <Select onChange={(e) => handleChange(e)} value={qnt}>
            {array.map((option) => (
              <Option>{option}</Option>
            ))}
          </Select>
        </Quantity>
      </MiddleContainer>
      <RightContainer>
        <Button onClick={(e) => db.collection("cart").doc(id).delete()}>
          Remove
        </Button>
      </RightContainer>
    </Container>
  );
};

export default CartProduct;

const Container = styled.div`
  display: flex;
  background: white;
  justify-content: space-around;
  width: 800px;
  border-radius: 4px;
  margin: 4px 10px;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.6s ease;
  }
`;
const LeftContainer = styled.div`
  text-align: center;
  margin: 10px;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px 10px;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const ProductImage = styled.img`
  width: 120px;
`;
const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 4px 0;
`;
const Description = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
  color: #616161;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #3f51b5;
  outline: none;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }

  @media screen and (max-width: 1200px) {
    width: 95px;
    height: 35px;
  }
`;
const Price = styled.p`
  font-style: italic;
  font-weight: 400;
  letter-spacing: 2px;

  :before {
    content: "Rs.";
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  :before {
    content: "Qnt. ";
  }
`;
const Select = styled.select`
  height: 30px;
  width: 120px;
`;
const Option = styled.option``;
