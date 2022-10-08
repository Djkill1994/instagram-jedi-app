import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IActiveChatUsers } from "mocks/data/selectedUsersChat";

interface MessageState {
  activeChatUser?: IActiveChatUsers;
}

const initialState: MessageState = {};

export const messageSlice = createSlice({
  name: "activeUserChat",
  initialState,
  reducers: {
    setActiveUserChat: (state, { payload }) => {
      state.activeChatUser = payload;
    },
  },
});

export const { setActiveUserChat } = messageSlice.actions;

export const activeChatUserSelector = (state: RootState) =>
  state.messageReducer.activeChatUser;
