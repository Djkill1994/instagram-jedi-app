import React from "react";
import s from "./ChatBar.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { Chat } from "./Chat";
import { InputBar } from "./InputBar";
import { useChat } from "../../hooks/useChat";
import { useSelector } from "react-redux";
import { activeChatUserSelector } from "../../slices/message.slice";

export const ChatBar: React.FC = () => {
  const activeChatUser = useSelector(activeChatUserSelector);
  const { sendMessage } = useChat(
    activeChatUser?.roomId,
    activeChatUser?.userName,
    activeChatUser?.id
  );

  return (
    <Stack direction="column">
      <Stack
        direction="row"
        className={s.headerChat}
        alignItems="center"
        spacing={2}
      >
        {activeChatUser?.userAvatar && (
          <Avatar
            src={activeChatUser?.userAvatar}
            sx={{ width: 24, height: 24 }}
          />
        )}
        <Stack direction="column">
          <Typography fontWeight="bolder">
            {activeChatUser?.userName}
          </Typography>
        </Stack>
      </Stack>
      <Chat />
      <InputBar sendMessage={sendMessage} />
    </Stack>
  );
};
