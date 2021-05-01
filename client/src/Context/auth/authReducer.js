import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_USER,
    AUTH_ERROR,
  } from './types';
  
  const authReducer = (state, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
        };
      case GET_USER:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          error: action.payload,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  