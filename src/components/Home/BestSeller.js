import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../Firebase";
import Product from "../Product/Product";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  const getItems = () => {
    db.collection("products")
      .where("bestseller", "==", true)
      .get()
      .then((snapshot) => {
        let tempItems = [];
        tempItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }));
        setBestSeller(tempItems);
      });
  };

  useEffect(() => {
    getItems();
  }, [bestSeller]);

  return (
    <Container id="bestseller">
      <TopContainer>
        <Heading>Our BestSeller</Heading>
      </TopContainer>
      <BottomContainer>
        {bestSeller.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.item.name}
            price={item.item.price}
            image={item.item.image}
            description={item.item.description}
            bestseller={item.item.bestseller}
          />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default BestSeller;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Heading = styled.h1`
  border-bottom: 1px solid #616161;
  padding-bottom: 10px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
`;
