import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import request from "../../services/request";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../utils/localStorage";

type AuthState = {
  loading: boolean;
  isAuth: boolean;
  token: string;
};

const token = getLocalStorage("token");

// mặc định
const initialState: AuthState = {
  isAuth: false,
  loading: false,
  token:""
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    me: (state) => {
      if (token) {
        request.setAuthentication(token);
      }
    },
    setToken: (state, action: PayloadAction<string>): AuthState => {
      if (action.payload) {
        setLocalStorage("token", action.payload);
        request.setAuthentication(action.payload);
      }

      return {
        ...state,
        isAuth: true,
        loading: false,
        token:action.payload
      };
    },

    cleanUp: (state) => ({
      ...state,
      loading: false,
      status: undefined,
      error: undefined,
    }),
  },
});

export const { me, cleanUp,setToken } = AuthSlice.actions;

export default AuthSlice.reducer;
