import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER,
  AUTH_ERROR,
} from './types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //   Get Logged in User
  const getUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/authuser', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      const data = await response.json();

      dispatch({
        type: GET_USER,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  //   Register User
  const registerUser = async (formData) => {
    try {
      const res = await fetch('http://localhost:5000/api/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      dispatch({
        type: REGISTER_SUCCESS,
        payload: data.data,
      });

      getUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.message,
      });
    }
  };

  //   Login User

  const loginUser = async (formData) => {
    try {
      const res = await fetch('http://localhost:5000/api/authuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        getUser,
        registerUser,
        loginUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
