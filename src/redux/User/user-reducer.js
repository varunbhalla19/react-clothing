import UserActions from './user-action-types' ;

const init_state = {
    currentUser : null 
} ;

const userReducer = ( currentState = init_state , action ) => {
    if(action.type === UserActions.SET_CURRENT_USER ) {
        return {
            ...currentState ,
            currentUser : action.payload ,
        } ;
    }
    return currentState ;
}

export default userReducer ;