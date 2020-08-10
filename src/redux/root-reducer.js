import { combineReducers } from 'redux' ;

import userReducer from './User/user-reducer' ;
import cartShowReducer from './CartShow/cartshow-reducer' ;

const rootReducer = combineReducers ({
    user : userReducer,
    cartShow : cartShowReducer 
}) ;

export default rootReducer ;