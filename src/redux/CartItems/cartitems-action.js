import CartItemType from "./cartitems-action-type";

const CartItemAction = (item) => ({
  type: CartItemType.ADD_CART_ITEM,
  payload: item,
});

const CartItemDelete = (itemId) => ({
  type: CartItemType.DELETE_CART_ITEM,
  payload: itemId,
});

const IncreaseItem = itemId => ({
  type : CartItemType.INC_CART_ITEM,
  payload : itemId
})

const DecreaseItem = itemId => ({
  type : CartItemType.DEC_CART_ITEM,
  payload : itemId
})

const ClearCart = () => ({
  type : CartItemType.CLEAR_CART
})

export {CartItemDelete ,IncreaseItem , DecreaseItem, ClearCart } ;

export default CartItemAction;
