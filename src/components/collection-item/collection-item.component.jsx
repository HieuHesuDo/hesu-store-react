import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './collection-item.style.scss'
import {addItem} from '../../redux/cart/cart.action'
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} buttonText='Thêm vào giỏ hàng' inverted></CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)) //Khi mà gọi function này, function này sẽ nhận item như một props và pass vào addItem action, sau đó sẽ gửi đi object mới vào store
})

export default connect(null, mapDispatchToProps)(CollectionItem);
