import React from "react";
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
} from "./authActionType";

const initailState = {
  jwt: null,
  error: null,
  loading: false,
  user: null,
};
export const authReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        jwt: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
    
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    
    default:
      return state;
  }
};

export default authReducer;
