import styled from "./Messages.module.scss";
import { Box, Stack } from "@mui/material";
import React from "react";
import { UserBarMessages } from "./UserBarMessages";
import { ChatBar } from "./ChatBar";

export const Messages: React.FC = () => {
  return (
    <Box role="main" className={styled.messagesPage}>
      <Stack direction="row">
        <UserBarMessages />
        <ChatBar />
      </Stack>
    </Box>
  );
};
