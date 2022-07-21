import React from "react";
import s from "./ChatBar.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { Chat } from "./Chat";
import { InputBar } from "./InputBar";
import { useChat } from "../../hooks/useChat";
import { useSelector } from "react-redux";
import { MessageSelector } from "../../slices/Message.slice";

export const ChatBar: React.FC = () => {
  const userData = useSelector(MessageSelector);
  const { sendMessage } = useChat(
    userData.roomId,
    userData.userName,
    userData.id
  );
  console.log(userData);
  return (
    <Stack className={s.chatBar} direction="column">
      <Stack
        direction="row"
        className={s.headerChat}
        alignItems="center"
        spacing={2}
      >
        {userData.userAvatar ? (
          <Avatar
            className={s.avatarHeaderChat}
            src={userData.userAvatar}
            sx={{ width: 24, height: 24 }}
          />
        ) : null}
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
