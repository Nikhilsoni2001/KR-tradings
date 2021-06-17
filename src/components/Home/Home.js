import React from "react";
import styled from "styled-components";
import LandingPage from "../Home/LandingPage";
import BestSeller from "../Home/BestSeller";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <Container>
      <LandingPage />
      <BestSeller />
      <Footer />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
