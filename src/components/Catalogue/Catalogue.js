import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { db } from "../../Firebase";

const Catalogue = ({ title }) => {
  const [crockeryItems, setCrockeryItems] = useState([]);

  const getItems = () => {
    db.collection("products")
      .where("type", "==", title)
      .get()
      .then((snapshot) => {
        let tempItems = [];
        tempItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }));
        setCrockeryItems(tempItems);
      });
  };

  useEffect(() => {
    getItems();
  }, [crockeryItems]);

  return (
    <Container>
      <TopContainer>
        <Heading>{title}</Heading>
      </TopContainer>
      <BottomContainer>
        {crockeryItems.map((data) => (
          <Product
            id={data.id}
            title={data.item.name}
            price={data.item.price}
            image={data.item.image}
            description={data.item.description}
          />
        ))}
      </BottomContainer>
    </Container>
  );
};

export default Catalogue;

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
