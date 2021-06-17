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

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.6s ease;
  }
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
