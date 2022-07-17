import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface MessageState {
  id: string;
  userName: string;
  userAvatar: string;
}

const initialState: MessageState = {
  id: "",
  userAvatar: "",
  userName: "",
};

export const messageSlice = createSlice({
  name: "activeUserChat",
  initialState,
  reducers: {
    setActiveUser: (state, { payload }) => {
      state.id = payload;
      state.userName = payload;
      state.userAvatar = payload;
    },
  },
});

export const { setActiveUser } = messageSlice.actions;

export const MessageSelector = (state: RootState) => state.activeUserChat;
