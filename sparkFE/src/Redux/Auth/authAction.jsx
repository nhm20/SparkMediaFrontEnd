import axios from "axios";
import { api, API_BASE_URL } from "../../Config/api";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "./authActionType";

export const loginUserAction = (loginData) => {
 return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/user/auth/signin`,
        loginData.data
      );
      if (data.token) {
        localStorage.setItem("jwt", data.token);
      }
      console.log("Login success", data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.jwt,
      });
    } catch (error) {
      console.log("---error---", error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error,
      });
    }
  };
};

export const registerUserAction = (registerData) => {
  async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/user/auth/signin`,
        registerData.data
      );
      if (data.token) {
        localStorage.setItem("jwt", data.token);
      }
      console.log("Register success", data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data.jwt,
      });
    } catch (error) {
      console.log("---error---", error);
      dispatch({
        type: REGISTER_FAILURE,
        payload: error,
      });
    }
  };
};

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Get profile success", data);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("---profile error---", error);
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error,
    });
  }
}

export const updateProfileAction = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await api.put(
      `${API_BASE_URL}/api/user/update`,
      reqData
    );
    console.log("Update profile success", data);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("---update profile error---", error);
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: error,
    });
  }
}
