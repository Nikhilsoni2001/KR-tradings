import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";

const Header = ({ logo }) => {
  return (
    <Container>
      <Logo img src={logo} />
      <Nav>
        <NavItems>
          <NavItem href="#">Crockery</NavItem>
          <NavItem href="#">Utensils</NavItem>
          <NavItem href="#">Accessories</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Contact</NavItem>
        </NavItems>
        <CartLogo>
          <PersonIcon />
        </CartLogo>
        <CartLogo>
          <ShoppingBasketIcon />
        </CartLogo>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  max-height: 100px;
  align-items: center;
  font-family: "Oswald", sans-serif;
`;

const Logo = styled.img`
  height: 80px;
  cursor: pointer;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;
const NavItems = styled.div`
  display: flex;
  margin: 0 20px;
`;
const NavItem = styled.a`
  color: #616161;
  margin: 0 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  text-decoration: none;

  :hover {
    color: #3f51b5;
    transition: all 0.3s;
  }
`;
const CartLogo = styled.div`
  margin-right: 20px;
  cursor pointer;
  :hover {
    color: #3f51b5;
    transition: all 0.3s;
  }
`;
