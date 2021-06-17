import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ logo }) => {
  const [open, setOpen] = useState(false);

  const DropDown = () => {
    return (
      <DropDownContainer>
        <DropDownItems>
          <Link
            to="/daily-use"
            style={{ textDecoration: "none", margin: "10px 0" }}
          >
            <DropDownItem>Daily use</DropDownItem>
          </Link>

          <Link
            to="/electronics"
            style={{ textDecoration: "none", margin: "10px 0" }}
          >
            <DropDownItem>Electronics</DropDownItem>
          </Link>
        </DropDownItems>
      </DropDownContainer>
    );
  };

  return (
    <Container>
      <Link to="/">
        <Logo img src={logo} />
      </Link>
      <Nav>
        <NavItems>
          <Link to="/crockery" style={{ textDecoration: "none" }}>
            <NavItem>Crockery</NavItem>
          </Link>

          <Link to="/utensils" style={{ textDecoration: "none" }}>
            <NavItem>Utensils</NavItem>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <NavItem>Accessories</NavItem>
            {open && <DropDown />}
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <NavItem>About</NavItem>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <NavItem>Contact</NavItem>
          </Link>
        </NavItems>
        <CartLogo>
          <Link to="/login" style={{ color: "black" }}>
            <PersonIcon />
          </Link>
        </CartLogo>
        <CartLogo>
          <Link to="/cart" style={{ color: "black" }}>
            <ShoppingBasketIcon />
          </Link>
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

  @media screen and (max-width: 1200px) {
    height: 70px;
  }

  @media screen and (max-width: 1025px) {
    height: 60px;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;
const NavItems = styled.div`
  display: flex;
  margin: 0 20px;

  @media screen and (max-width: 1200px) {
    margin: 0 5px;
  }
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

  @media screen and (max-width: 1200px) {
    letter-spacing: 1px;
    font-size: 15px;
  }
  @media screen and (max-width: 1025px) {
    font-size: 14px;
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

const DropDownContainer = styled.div`
  position: fixed;
  top: 50px;
  right: 357px;
  width: 160px;
  height: 120px;
  background: white;
  align-items: space-evenly;
  border-radius: 6px;
  opacity: 0.9;
  z-index: 999;
`;

const DropDownItems = styled(NavItems)`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 30px 0;
`;
const DropDownItem = styled(NavItem)`
  font-size: 0.9rem;
  margin-top: 30px;
`;
