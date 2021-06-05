import { addItemToCart, removeItemFromCart } from "./cart.utils";
import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        //trả về một state mới cho tòan bộ cart reducer
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload), //cartItem là array mới sẽ bao gồm item đang chứa trong state và item mới được truyền vào qua action payload
      };
      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
        };
        case CartActionTypes.CLEAR_ITEM:
          return {
            ...state,
             cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
          }
    default:
      return state;
  }
};

export default cartReducer;
