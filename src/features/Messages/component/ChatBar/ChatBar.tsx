import React from "react";
import s from "./ChatBar.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { Chat } from "./Chat";
import { InputBar } from "./InputBar";
import { useChat } from "../../hooks/useChat";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export const ChatBar: React.FC = () => {
  const userData = useSelector((state: RootState) => state.activeUserChat);
  const { sendMessage } = useChat(
    userData.roomId,
    userData.userName,
    userData.id
  );

  return (
    <Stack className={s.chatBar} direction="column">
      <Stack
        direction="row"
        className={s.headerChat}
        alignItems="center"
        spacing={2}
      >
        <Avatar
          className={s.avatarHeaderChat}
          src={userData.userAvatar}
          sx={{ width: 24, height: 24 }}
        />
        <Stack direction="column">
          <Typography fontWeight="bolder">{userData.userName}</Typography>
          <Typography fontSize={12} className={s.lastMessageText}></Typography>
        </Stack>
      </Stack>
      <Chat />
      <InputBar sendMessage={sendMessage} />
    </Stack>
  );
};
