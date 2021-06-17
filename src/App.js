import "./App.css";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalogue from "./components/Catalogue/Catalogue";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Container className="App">
        <Header logo="/images/logo.png" />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/crockery">
            <Catalogue title="Crockery" />
          </Route>
          <Route path="/utensils">
            <Catalogue title="Utensils" />
          </Route>
          <Route path="/Daily use">
            <Catalogue title="Daily use" />
          </Route>
          <Route path="/Electronics">
            <Catalogue title="Electronics" />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``;
