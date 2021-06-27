import React from "react";
import styled from "styled-components";
import CartProduct from "../Product/CartProduct";
import Subtotal from "./Subtotal";

const Cart = ({ cartItems }) => {
  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.quantity * item.product.price;
    });
    return total;
  };

  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += parseInt(item.product.quantity);
    });
    return count;
  };

  return (
    <Container>
      <CartItems>
        <HeadingContainer>
          <Heading>Your Cart Items</Heading>
        </HeadingContainer>

        {cartItems.map((data) => (
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
        <Subtotal count={getCount()} total={getTotal()} />
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
