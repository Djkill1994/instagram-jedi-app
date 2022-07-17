import React from "react";
import s from "./ChatBar.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { Chat } from "./Chat";
import { InputBar } from "./InputBar";
import { useChat } from "../../hooks/useChat";

export const ChatBar: React.FC = () => {
  const { users, messages, sendMessage } = useChat("", "", 0);

  return (
    <Stack className={s.chatBar} direction="column">
      <Stack
        direction="row"
        className={s.headerChat}
        alignItems="center"
        spacing={2}
      >
        <Avatar className={s.avatarHeaderChat} />
        <Stack direction="column">
          <Typography fontWeight="bolder">huita</Typography>
          <Typography fontSize={12} className={s.lastMessageText}></Typography>
        </Stack>
      </Stack>
      <Chat />
      <InputBar sendMessage={sendMessage} />
    </Stack>
  );
};
