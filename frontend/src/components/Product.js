import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";

const Product = (props) => {
  const { product } = props;
  return (
    <Card
      style={{ width: "25rem" }}
      className="d-inline-flex flex-row justify-content-center"
    >
      <img
        style={{ width: "18rem" }}
        src={product.image}
        alt={product.name}
        className="card-img-top"
      />
      <div>
        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Card.Text>
              <strong>{product.price}</strong>
            </Card.Text>
          </Link>
          {/* <Button variant="secondary">Add to cart</Button> */}
        </Card.Body>
      </div>
    </Card>
  );
};

export default Product;
