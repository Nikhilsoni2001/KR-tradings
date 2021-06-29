import Header from "./components/Header/Header";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalogue from "./components/Catalogue/Catalogue";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import Contact from "./components/Contact/Contact";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setCartItems] = useState([]);

  const getUid = () => {
    const temp = JSON.parse(localStorage.getItem("user"));
    return temp.uid;
  };

  const getCartItems = () => {
    db.collection("users")
      .doc(getUid())
      .collection("cart")
      .get()
      .then((snapshot) => {
        let tempProd = [];
        tempProd = snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }));
        setCartItems(tempProd);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    user && getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <Router>
      {!user ? (
        <Login logo="/images/logo.png" setUser={setUser} />
      ) : (
        <Container>
          <Header
            logo="/images/logo.png"
            user={user}
            signOut={signOut}
            cartItems={cartItems}
          />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>

            <Route path="/crockery">
              <Catalogue title="Crockery" />
            </Route>
            <Route path="/utensils">
              <Catalogue title="Utensils" />
            </Route>
            <Route path="/Daily-use">
              <Catalogue title="Daily use" />
            </Route>
            <Route path="/Electronics">
              <Catalogue title="Electronics" />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div``;
