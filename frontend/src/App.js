import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import NavBar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
// import Button from "react-bootstrap/Button";
import SplitButton from "react-bootstrap/SplitButton";

import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "./Store";

import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Button";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentmethod");
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>E-com</NavBar.Brand>
              </LinkContainer>
              <Nav className="ne-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="warning">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <SplitButton variant="secondary" title={userInfo.name}>
                    <Dropdown.Item eventKey="1">
                      <Link to="/profile">User Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      <Link to="/orderhistory">Order History</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="2">
                      <Link onClick={signoutHandler} to="#signout">
                        Sign Out
                      </Link>
                    </Dropdown.Item>
                  </SplitButton>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Signin
                  </Link>
                )}
              </Nav>
            </Container>
          </NavBar>
        </header>
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/shipping" element={<ShippingAddressScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/payment" element={<PaymentMethodScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
