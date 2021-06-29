import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    "@media screen and (max-width: 481px)": {
      width: 200,
    },
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Header = ({ logo, user, signOut, cartItems }) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const getcount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += JSON.parse(item.product.quantity);
    });
    return count;
  };

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
      <Modal open={openModal} onClose={(e) => setOpenModal(false)}>
        <ModalContainer style={modalStyle} className={classes.paper}>
          <h2>User Details</h2>
          <Image src={user.photo} />
          <ModalRow>
            <Title>Name: </Title>
            <Content>{user.name}</Content>
          </ModalRow>
          <ModalRow>
            <Title>Email: </Title>
            <Content>{user.email}</Content>
          </ModalRow>

          <Logout onClick={signOut}>Logout</Logout>
        </ModalContainer>
      </Modal>

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
          <Link style={{ color: "black" }}>
            <PersonIcon
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </Link>
        </CartLogo>
        <CartLogo>
          <Link to="/cart" style={{ color: "black" }}>
            <ShoppingBasketIcon />
          </Link>
          {getcount()}
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
  height: 70px;
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
display: flex;
align-items: center;
padding: 2px;
  margin-right: 20px;
  cursor pointer;
  :hover {
    color: #3f51b5;
    transition: all 0.3s;
  }
`;

const DropDownContainer = styled.div`
  position: fixed;
  top: 46px;
  right: 370px;
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
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  margin: 10px 0;
  height: 80px;
  border-radius: 50%;
`;

const ModalRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin: 10px 0;
`;
const Title = styled.h3``;
const Content = styled.h4``;
const Logout = styled.button`
  margin-top: 30px;
  height: 35px;
  padding: 4px 8px;
  font-size: 14px;
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
