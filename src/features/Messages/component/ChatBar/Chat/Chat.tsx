import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import styled from "./Chat.module.scss";
import { useChat } from "../../../hooks/useChat";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { activeChatUserSelector } from "../../../slices/message.slice";
import { useChatScroll } from "../../../../../common/hooks/useChatScroll";

export const Chat: React.FC = () => {
  const activeChatUser = useSelector(activeChatUserSelector);
  const { messages } = useChat(
    activeChatUser?.roomId,
    activeChatUser?.userName,
    activeChatUser?.id
  );
  const refik = useChatScroll(messages);

  return (
    <Stack
      className={styled.chat}
      spacing={1}
      alignItems="baseline"
      ref={refik}
    >
      {messages.map(({ messageText, messageId, currentUser }) => (
        <Box
          key={messageId}
          className={clsx(
            styled.itemMessage,
            currentUser ? styled.otherUser : styled.currentUser
          )}
        >
          {messageText}
        </Box>
      ))}
    </Stack>
  );
};
