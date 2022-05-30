import React from "react";
import { Box, Stack } from "@mui/material";
import s from "./Chat.module.scss";
import { useChat } from "../../../hooks/useChat";
import clsx from "clsx";

export const Chat: React.FC = () => {
  const { messages } = useChat("1");

  return (
    <Stack className={s.chat} spacing={1} alignItems="baseline">
      {messages.map(({ messageText, messageId, currentUser }) => (
        <Box
          key={messageId}
          className={clsx(
            s.itemMessage,
            currentUser ? s.otherUser : s.currentUser
          )}
        >
          {messageText}
        </Box>
      ))}
    </Stack>
  );
};
