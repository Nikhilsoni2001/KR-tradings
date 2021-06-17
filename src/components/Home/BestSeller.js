import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";

const BestSeller = () => {
  return (
    <Container>
      <TopContainer>
        <Heading>Our BestSeller</Heading>
      </TopContainer>
      <BottomContainer>
        <Product
          title="Cello Containers"
          price="120"
          image="best_1.jpg"
          description="Air tight premium containers"
        />
        <Product
          title="Dinner Set"
          price="450"
          image="best_2.jpg"
          description="Luxury dinner set"
        />
        <Product
          title="Turbo Flex 360"
          price="60"
          image="best_3.jpg"
          description="360 degree rotation pipe"
        />
        <Product
          title="Push Button Container"
          price="130"
          image="best_4.jpg"
          description="Premium quality push button container"
        />
        <Product
          title="Cello Containers"
          price="120"
          image="best_1.jpg"
          description="Air tight premium containers"
        />
        <Product
          title="Dinner Set"
          price="450"
          image="best_2.jpg"
          description="Luxury dinner set"
        />
        <Product
          title="Turbo Flex 360"
          price="60"
          image="best_3.jpg"
          description="360 degree rotation pipe"
        />
        <Product
          title="Push Button Container"
          price="130"
          image="best_4.jpg"
          description="Premium quality push button container"
        />
        <Product
          title="Cello Containers"
          price="120"
          image="best_1.jpg"
          description="Air tight premium containers"
        />
        <Product
          title="Dinner Set"
          price="450"
          image="best_2.jpg"
          description="Luxury dinner set"
        />
        <Product
          title="Turbo Flex 360"
          price="60"
          image="best_3.jpg"
          description="360 degree rotation pipe"
        />
        <Product
          title="Push Button Container"
          price="130"
          image="best_4.jpg"
          description="Premium quality push button container"
        />
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
