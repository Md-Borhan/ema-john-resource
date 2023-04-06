import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import OrderReview from "../OrderReview/OrderReview";
import "./Order.css";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleDeleteBtn = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="shopContainer">
      <div className="orderReview">
        <h2>Order Page</h2>
        {cart.map((product) => (
          <OrderReview
            key={product.id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
          ></OrderReview>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
