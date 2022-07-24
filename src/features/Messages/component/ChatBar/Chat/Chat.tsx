import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import s from "./Chat.module.scss";
import { useChat } from "../../../hooks/useChat";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

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
  const userData = useSelector((state: RootState) => state.activeUserChat);
  const { messages } = useChat(
    userData.roomId,
    userData.userName,
    userData.activeUserId
  );
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
