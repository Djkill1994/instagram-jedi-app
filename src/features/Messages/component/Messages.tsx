import { Avatar, Box, Button, Stack } from "@mui/material";
import React, { useState, VFC } from "react";
import { UserBarMessages } from "./UserBarMessages";
import { ChatBar } from "./ChatBar";
import { useSelector } from "react-redux";
import { activeChatUserSelector } from "../slices/message.slice";
import { ChatSection } from "./ChatSection";
import { ReactComponent as IconMessages } from "../../../assets/svg/iconMessages.svg";
import { SearchUsersModal } from "./UserBarMessages/SearchUsersModal";

export const Messages: VFC = () => {
  const [isOpen, setOpen] = useState(false);

  const activeChatUser = useSelector(activeChatUserSelector);

  return (
    <Box
      role="main"
      bgcolor="white"
      border="1px solid #dbdbdb"
      borderRadius="5px"
    >
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
            <Box
              width="600px"
              flexDirection="column"
              alignItems="center"
              display="flex"
              m="auto"
            >
              <IconMessages />
              Выберите пользователя
              <Button onClick={() => setOpen(true)}>Нажми меня</Button>
              {isOpen && <SearchUsersModal />}
            </Box>
          </ChatBar>
        )}
      </Stack>
    </Box>
  );
};
