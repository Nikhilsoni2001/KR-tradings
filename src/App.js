import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Home from "./components/Home";

function App() {
  return (
    <Container className="App">
      <Header logo="/images/logo.png" />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div``;
