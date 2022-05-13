import data from "../data";
// import { Card, Button } from "react-bootstrap";
import classes from "./HomeScreen.module.css";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className={classes.product} key={product.slug}>
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
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
