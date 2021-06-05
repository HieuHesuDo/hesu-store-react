import React from "react";
import { connect } from "react-redux";

import {addItem, removeItem, clearItem } from "../../redux/cart/cart.action";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="price">
        {price.toLocaleString("it-IT", { style: "currency", currency: "VND" })}
      </div>
      <div className="quantity">
        <div className="arrow decrease" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow increase" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>
      <div className="remove-item" onClick={() => clearItem(cartItem)}>&#10006;</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
