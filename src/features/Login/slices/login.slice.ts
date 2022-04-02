import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface LoginState {
  isAuth: boolean;
}

const initialState: LoginState = {
  isAuth: false,
};

export const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
  },
});

export const { setAuth } = loginSlice.actions;

export const loginSelector = (state: RootState) => state.loginUser;
