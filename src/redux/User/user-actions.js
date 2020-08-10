import UserActions from './user-action-types' ;

const setCurrentUser = user => ({
    type: UserActions.SET_CURRENT_USER ,
    payload: user
});

export default setCurrentUser ;