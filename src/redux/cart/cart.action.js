import CartActionTypes from './cart.types'

export const cartToggle = () => ({
    type: CartActionTypes.TOGGLE_CART
} )

export const addItem = ( item ) => ({ //function truyền vào một item và cho ra một action object chứa action type và payload sẽ truyền vào cho reducer
    type: CartActionTypes.ADD_ITEM,
    payload: item                           // Đây sẽ là item mới được truyền vào thông qua action payload 
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})