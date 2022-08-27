import React, { VFC } from "react";
import { Box, Stack } from "@mui/material";
import styles from "./Chat.module.scss";
import clsx from "clsx";
import { useChatScroll } from "../../../../../common/hooks/useChatScroll";
import { IMessage } from "../../../hooks/useChat";

interface IChatProps {
  messages: IMessage[];
}

export const Chat: VFC<IChatProps> = ({ messages }) => {
  const ref = useChatScroll(messages);

  return (
    <Stack className={styles.chat} spacing={1} alignItems="baseline" ref={ref}>
      {messages?.map(({ messageText, messageId, currentUser }) => (
        <Box
          key={messageId}
          className={clsx(
            styles.itemMessage,
            currentUser ? styles.otherUser : styles.currentUser
          )}
        >
          {messageText}
        </Box>
      ))}
    </Stack>
  );
};
