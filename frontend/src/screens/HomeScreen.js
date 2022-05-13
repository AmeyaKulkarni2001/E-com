// import data from "../data";
// import { Card, Button } from "react-bootstrap";
// import classes from "./HomeScreen.module.css";

import { useEffect, useReducer } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }

      //   setProducts(result.data);
    };
    fetchData();
  }, [error]);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Col>
            {products.map((product) => (
              // <div className={classes.product} key={product.slug}>
              <Row key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product} />
              </Row>
            ))}
          </Col>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
