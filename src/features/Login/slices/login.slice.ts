import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { IUser } from "../../../mocks/data/users";

interface LoginState {
  isAuth: boolean;
  authUser?: IUser;
}

const initialState: LoginState = {
  isAuth: false,
};

export const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    setAuthUser: (state, { payload }) => {
      state.isAuth = payload;
      state.authUser = payload;
    },
  },
});

export const { setAuthUser } = loginSlice.actions;

export const loginSelector = (state: RootState) => state.loginUser;
