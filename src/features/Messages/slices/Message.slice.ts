import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface MessageState {
  id: any;
  userName: string;
  userAvatar: string;
  roomId: string;
}

const initialState: MessageState = {
  id: "",
  userAvatar: "",
  userName: "",
  roomId: "",
};

export const messageSlice = createSlice({
  name: "activeUserChat",
  initialState,
  reducers: {
    setActiveUser: (state, { ...payload }) => {
      state.id = payload.payload.id;
      state.userName = payload.payload.userName;
      state.userAvatar = payload.payload.userAvatar;
      state.roomId = payload.payload.roomId;
    },
    setOnUser: (state, { payload }) => {
      state.userName = payload.userName;
      state.userAvatar = payload.userAvatar;
    },
  },
});

export const { setActiveUser, setOnUser } = messageSlice.actions;

export const MessageSelector = (state: RootState) => state.activeUserChat;
