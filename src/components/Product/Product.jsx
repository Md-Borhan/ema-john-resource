import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;

  return (
    <div className="product">
      <img src={img && img} alt="" />
      <div className="product-info">
        <h6>{name && name}</h6>
        <p>Price: ${price && price}</p>
        <p className="manu">Manufacturer: {seller && seller}</p>
        <p>Rating: {ratings && ratings} star</p>
      </div>
      <button
        onClick={() => props.handleCart(props.product)}
        className="addCart"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
