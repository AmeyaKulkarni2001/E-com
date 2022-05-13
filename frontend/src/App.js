import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Button";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">E-com</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
