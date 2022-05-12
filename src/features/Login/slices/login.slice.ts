import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface LoginState {
  isAuth: boolean;
  userName: string;
  userAvatar: string;
  userId: string;
}

const initialState: LoginState = {
  isAuth: false,
  userName: "",
  userAvatar: "",
  userId: "",
};

export const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
    setUserData: (state, { payload }) => {
      state.userName = payload;
      state.userAvatar = payload;
      state.userId = payload;
    },
  },
});

export const { setAuth, setUserData } = loginSlice.actions;

export const loginSelector = (state: RootState) => state.loginUser;
