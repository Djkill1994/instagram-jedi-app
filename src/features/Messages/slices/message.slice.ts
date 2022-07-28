import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { IActiveChatUser } from "../../../mocks/data/selectedUsersChat";

interface IMessageSlice {
  activeChatUser?: IActiveChatUser;
}

interface MessageState {
  activeUserId: any;
  userName: string;
  userAvatar: string;
  roomId: string;
}

const initialState: MessageState = {
  activeUserId: "",
  userAvatar: "",
  userName: "",
  roomId: "",
};

export const messageSlice = createSlice({
  name: "activeUserChat",
  initialState,
  reducers: {
    setActiveUserChat: (state, { payload }) => {
      state.activeUserId = payload.activeUserId;
      state.userName = payload.userName;
      state.userAvatar = payload.userAvatar;
      state.roomId = payload.roomId;
    },
  },
});

export const { setActiveUserChat } = messageSlice.actions;

export const MessageSelector = (state: RootState) => state.activeUserChat;
