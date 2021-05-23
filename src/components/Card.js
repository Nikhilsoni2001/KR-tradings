import React from "react";
import styled from "styled-components";

const Card = ({ icon, title, description }) => {
  return (
    <Container>
      <LeftContainer>{icon}</LeftContainer>
      <RightContainer>
        <Heading>{title}</Heading>
        <Description>{description}</Description>
      </RightContainer>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  margin: 20px;
  display: flex;
  background: white;
  width: 250px;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 6px;
`;
const LeftContainer = styled.div`
  background: #f5f5f5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 2.6rem;
`;
const RightContainer = styled.div``;
const Heading = styled.h3`
  margin-bottom: 4px;
`;
const Description = styled.p`
  font-size: 0.7rem;
  color: #616161;
`;
