import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Button";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>E-com</NavBar.Brand>
              </LinkContainer>
            </Container>
          </NavBar>
        </header>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
