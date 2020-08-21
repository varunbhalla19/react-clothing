import UserActions from "./user-action-types";

const init_state = {
  currentUser: null,
  er: null,
};


const userReducer = (currentState = init_state, action) => {
  switch (action.type) {
    case UserActions.AUTH_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        er: null,
      };
    case UserActions.AUTH_FAILURE:
      return {
        ...currentState,
        er: action.payload,
      };

    case UserActions.SIGNOUT_SUCCESS:
      return {
        currentState : null,
        er : null
      }

    default:
      return currentState;
  }
};
export default userReducer;

// if(action.type === UserActions.SET_CURRENT_USER ) {
//     return {
//         ...currentState ,
//         currentUser : action.payload ,
//     } ;
// }
