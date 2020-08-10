import CartShowAction from './cartshow-action-type' ; 

const initState = false

const cartShowReducer = ( cartShow = initState , action ) => {
    switch (action.type) {
        case CartShowAction.TOGGLE_CARTSHOW:
            return !cartShow ;
        default:
            return cartShow;
    }
}

export default cartShowReducer 