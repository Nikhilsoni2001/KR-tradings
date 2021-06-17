import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const Subtotal = () => {
  return (
    <Container>
      <Total>
        Subtotal (0 items):
        <NumberFormat
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs."}
        />
      </Total>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  );
};

export default Subtotal;

const Container = styled.div`
  padding: 20px;
  margin: 10px 0;
`;
const CheckoutButton = styled.button`
  background-color: #3f51b5;
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }
`;
const Total = styled.div``;
