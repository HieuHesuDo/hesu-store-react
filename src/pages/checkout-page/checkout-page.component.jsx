import React from 'react'
import {connect} from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


import './checkout-page.style.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Sản phẩm</span>
            </div>
            <div className="header-block">
                <span>Tên</span>
            </div>
            <div className="header-block">
                <span>Giá</span>
            </div>
            <div className="header-block">
                <span>Số lượng</span>
            </div>
            <div className="header-block">
                <span></span>
            </div>
        </div>
        {cartItems.length ? (
          cartItems.map(
            (
              cartItem
              ) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )
        ) : (
          <span className='empty-message'>Giỏ hàng của bạn đang trống</span>
        )}

        <div className="total">
            <span>Tổng tiền: <strong>{total.toLocaleString("it-IT", { style: "currency", currency: "VND" })} </strong></span>
        </div>
        <div className="test-warning">
            TEST PAYMENT: 4242 4242 4242 4242 - EXP: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state), 
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage)