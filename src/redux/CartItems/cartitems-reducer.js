import CartItemType from './cartitems-action-type' ;

const cartItemReducer = ( state = [] , action ) => {
    if( action.type === CartItemType.ADD_CART_ITEM ) {
        return [
            ...state,
            action.payload 
        ]
    }
    return state ;
}

export default cartItemReducer ;