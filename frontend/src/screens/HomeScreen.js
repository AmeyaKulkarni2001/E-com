// import data from "../data";
// import { Card, Button } from "react-bootstrap";
// import classes from "./HomeScreen.module.css";
import { Link } from "react-router-dom";
import { useEffect, useReducer } from "react";
import axios from "axios";

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
          products.map((product) => (
            // <div className={classes.product} key={product.slug}>
            <div
              className="d-flex flex-row justify-content-center"
              key={product.slug}
            >
              <img src={product.image} alt={product.name} />
              <div>
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                </Link>

                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
