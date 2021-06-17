import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Footer = () => {
  return (
    <Container>
      <Socials>
        <Icon
          href="https://www.facebook.com/KR-Trading-Company-107822047710118"
          target="_blank"
        >
          <FacebookIcon style={{ fontSize: "30px" }} />
        </Icon>
        <Icon
          href="https://www.instagram.com/krtradingcompany230820/"
          target="_blank"
        >
          <InstagramIcon style={{ fontSize: "30px" }} />
        </Icon>
        <Icon
          href="https://api.whatsapp.com/send?phone=918076632041"
          target="_blank"
        >
          <WhatsAppIcon style={{ fontSize: "30px" }} />
        </Icon>
      </Socials>

      <FooterDesc>
        We are delivering the best and premium quality products at a reasonable
        price
      </FooterDesc>
      <Copyright>Made with love ♥️ © 2021</Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  align-items: center;
`;
const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin: 6rem 6rem 1rem 6rem;
  font-size: 1rem;
`;
const Icon = styled.a`
  text-decoration: none;
  color: black;
  background: #bbdefb;
  border-radius: 50%;
  margin: 10px 20px;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 42px;
`;

const FooterDesc = styled.p`
  font-style: italic;
  margin: 6px 0;
`;
const Copyright = styled.p`
  font-style: italic;
  margin-bottom: 2rem;
`;
