import React from "react";
import { Box, Stack } from "@mui/material";
import s from "./Chat.module.scss";
import { useChat } from "../../../hooks/useChat";

export const Chat: React.FC = () => {
  const { messages } = useChat("1");

  return (
    <Stack
      className={s.chat}
      spacing={1}
      alignItems="baseline"
      justifyContent="flex-end"
    >
      {messages.map(({ messageText, messageId, currentUser }) => (
        <Box
          key={messageId}
          className={s.itemMessage}
          style={{ color: currentUser ? "green" : "red" }}
        >
          {messageText}
        </Box>
      ))}
    </Stack>
  );
};
