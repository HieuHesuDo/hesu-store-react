import React from 'react'
import {connect} from 'react-redux'

import {cartToggle} from '../../redux/cart/cart.action'
import {selectCartItemCount} from '../../redux/cart/cart.selector'

import {ReactComponent as ShoppingCart} from './shopping-cart.svg'

import './cart-icon.style.scss'

const CartIcon = ({cartToggle, itemCount}) => (
    <div className="cart-icon" onClick={cartToggle}>
        <ShoppingCart className='shopping-icon'></ShoppingCart>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    cartToggle: () => dispatch(cartToggle())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)