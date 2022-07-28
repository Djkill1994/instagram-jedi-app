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
      state.userName = payload.userName;
      state.userAvatar = payload.userAvatar;
      state.userId = payload.id;
    },
  },
});

export const { setAuth, setUserData } = loginSlice.actions;

export const loginSelector = (state: RootState) => state.loginUser;
