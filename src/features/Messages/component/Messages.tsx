import styled from "./Messages.module.scss";
import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import { UserBarMessages } from "./UserBarMessages";
import { ChatBar } from "./ChatBar";
import { useSelector } from "react-redux";
import { activeChatUserSelector } from "../slices/message.slice";
import { ChatSection } from "./ChatSection";

export const Messages: React.FC = () => {
  const activeChatUser = useSelector(activeChatUserSelector);

  return (
    <Box role="main" className={styled.messagesPage}>
      <Stack direction="row">
        <UserBarMessages />
        {activeChatUser ? (
          <ChatBar
            senderAvatar={
              <Avatar
                src={activeChatUser?.userAvatar}
                sx={{ width: 24, height: 24 }}
              />
            }
            senderUserName={activeChatUser.userName}
          >
            <ChatSection />
          </ChatBar>
        ) : (
          <ChatBar>
            <Box width="100%" p="200px">
              Выберите пользователя
            </Box>
          </ChatBar>
        )}
      </Stack>
    </Box>
  );
};
