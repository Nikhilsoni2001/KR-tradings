import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartProduct from "../Product/CartProduct";
import Subtotal from "./Subtotal";
import { db } from "../../Firebase";

const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [products]);

  const getProducts = () => {
    db.collection("cart")
      .get()
      .then((snapshot) => {
        let tempProd = [];
        tempProd = snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }));
        setProducts(tempProd);
      });
  };
  return (
    <Container>
      <CartItems>
        <HeadingContainer>
          <Heading>Your Cart Items</Heading>
        </HeadingContainer>

        {products.map((data) => (
          <CartProduct
            key={data.id}
            id={data.id}
            title={data.product.title}
            image={data.product.image}
            price={data.product.price}
            description={data.product.description}
            quantity={data.product.quantity}
          />
        ))}
      </CartItems>

      <CartBilling>
        <Subtotal />
      </CartBilling>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  padding: 100px 50px;
  display: flex;
  background-color: #f1f1f1;
`;

const CartItems = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const CartBilling = styled.div`
  flex: 1;
`;
const Heading = styled.h1`
  border-bottom: 1px solid #616161;
  padding-bottom: 10px;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
