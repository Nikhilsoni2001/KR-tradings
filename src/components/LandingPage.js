import React from "react";
import styled from "styled-components";
import Card from "./Card";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const LandingPage = () => {
  return (
    <Container>
      <TopContainer>
        <LeftContainer>
          <Heading>
            Have your<span style={{ color: "#3F51B5" }}> Food with Style</span>
          </Heading>
          <Description>
            We are delivering the best at a reasonable price.
          </Description>
          <Button>Shop Now</Button>
        </LeftContainer>

        <RightContainer>
          <Image src="/images/bg.jpg" />
        </RightContainer>
      </TopContainer>

      <BottomContainer>
        <Card
          icon={<LocalShippingIcon />}
          title="Free Delivery"
          description="For orders above Rs.500"
        />
        <Card
          icon={<AccountBalanceWalletIcon />}
          title="100% Refund"
          description="Money-back after 7 days"
        />
        <Card
          icon={<LocalOfferIcon />}
          title="Premium Quality"
          description="Certified top quality items"
        />
      </BottomContainer>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 89vh;
`;

const TopContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-evenly;
`;

const LeftContainer = styled.div`
  padding: 230px 0;
`;
const RightContainer = styled.div`
  padding: 100px 0;
`;
const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;
const Description = styled.p`
  color: #616161;
  margin-bottom: 20px;
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
`;
const Image = styled.img`
  height: 450px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;
