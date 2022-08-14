import React, { VFC } from "react";
import { Box, Stack } from "@mui/material";
import styled from "./Chat.module.scss";
import clsx from "clsx";
import { useChatScroll } from "../../../../../common/hooks/useChatScroll";

interface IChatProps {
  messages: any[];
}

export const Chat: VFC<IChatProps> = ({ messages }) => {
  const ref = useChatScroll(messages);

  return (
    <Stack className={styled.chat} spacing={1} alignItems="baseline" ref={ref}>
      {messages?.map(({ messageText, messageId, currentUser }) => (
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
