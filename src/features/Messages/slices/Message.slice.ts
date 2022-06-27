import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface MessageState {
  userName: string;
  userAvatar: string;
  id: number | null;
}

const initialState: MessageState = {
  userName: "",
  userAvatar: "",
  id: null,
};

export const MessageSlice = createSlice({
  name: "Message",
  initialState,
  reducers: {
    setUserMessageData: (state, { payload }) => {
      state.userName = payload.userName;
      state.userAvatar = payload.userAvatar;
      state.id = payload.id;
    },
  },
});

export const { setUserMessageData } = MessageSlice.actions;

export const loginSelector = (state: RootState) => state.loginUser;
