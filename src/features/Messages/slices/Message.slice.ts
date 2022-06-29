import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface MessageState {
  id: string;
}

const initialState: MessageState = {
  id: "",
};

export const messageSlice = createSlice({
  name: "Message",
  initialState,
  reducers: {
    setActiveUserId: (state, { payload }) => {
      state.id = payload;
    },
  },
});

export const { setActiveUserId } = messageSlice.actions;

export const MessageSelector = (state: RootState) => state.activeUserId;
