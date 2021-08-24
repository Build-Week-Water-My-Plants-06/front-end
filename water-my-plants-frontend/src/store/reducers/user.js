import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAILURE } from '../actions';

const initialState = {
  user: {},
  error: '',
  isCallingAPI: false,
  isLoggedIn: false
};

export const user = (state= initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
        return {
          ...state,
          error: '',
          isCallingAPI: true
        };
      case LOGIN_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          user: action.payload,
          isCallingAPI: false,
          isLoggedIn: true
        };

      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          isCallingAPI: false
        };

      case LOGOUT:
        return {
         ...state,
         state: initialState,
         isLoggedIn: false
      };
      
      case EDIT_USER_START:
        return {
          ...state,
          error: '',
          isCallingAPI: true
        };

      case EDIT_USER_SUCCESS:
        return {
          ...state,
          plants: action.payload,
          isCallingAPI: false
        };

      case EDIT_USER_FAILURE:
        return {
          ...state,
          error: action.payload,
          isCallingAPI: false
        };

    default:
      return state;
  }
} 
