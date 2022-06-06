import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import s from "./Chat.module.scss";
import { useChat } from "../../../hooks/useChat";
import clsx from "clsx";

function useChatScroll<T>(
  dep: T
): React.MutableRefObject<HTMLDivElement | undefined> {
  const ref = useRef<HTMLDivElement>();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}

export const Chat: React.FC = () => {
  const { messages } = useChat("1");
  const ref = useChatScroll(messages);

  return (
    <Stack className={s.chat} spacing={1} alignItems="baseline" ref={ref}>
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
