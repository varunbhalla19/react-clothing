import CartItemType from './cartitems-action-type' ;

const CartItemAction = item => ({
    type : CartItemType.ADD_CART_ITEM,
    payload : item
})

export default CartItemAction