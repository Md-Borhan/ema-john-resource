import React, { useState } from "react";
import "./OrderReview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const OrderReview = ({ product, handleDeleteBtn }) => {
  const { id, name, price, img, quantity } = product;

  return (
    <div className="reviewOrder">
      <div className="reviewDetails">
        <div className="reviewImg">
          <img src={img} alt="" />
        </div>
        <div className="reviewContent">
          <p className="title">Name: {name}</p>
          <p>
            Price: <span className="extraColor">${price}</span>
          </p>
          <p>
            Order Quantity: <span className="extraColor">{quantity}</span>
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => handleDeleteBtn(id)} className="deleteBtn">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
