import React from 'react'

import './cart-item.style.scss'

const CartItem = ({item: {name, price, quantity, imageUrl}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <div className="name">{name}</div>
            <div className="price"><strong>Giá:</strong> {price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
            <div className="quantity"><strong>Số lượng:</strong> {quantity}</div>
        </div>
    </div>
)

export default CartItem