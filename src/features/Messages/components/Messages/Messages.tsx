import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React, { VFC } from "react";
import { UserBarMessages } from "../UserBarMessages";
import { ChatBar } from "../ChatBar";
import { useSelector } from "react-redux";
import { activeChatUserSelector } from "../../slices/message.slice";
import { ChatSection } from "../ChatSection";
import { ReactComponent as IconMessages } from "assets/svg/iconMessages.svg";
import { SelectChatUserModal } from "../SelectChatUserModal";
import { useModal } from "common/hooks/useModal";
import styles from "./Messages.module.scss";

export const Messages: VFC = () => {
  const { isOpened, open, close } = useModal();
  const activeChatUser = useSelector(activeChatUserSelector);

  return (
    <Box
      role="main"
      bgcolor="white"
      border="1px solid #dbdbdb"
      borderRadius="5px"
      className={styles.messagesWrapper}
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
            <Box m="auto">
              <SelectChatUserModal isOpened={isOpened} onClose={close} />
              <Stack
                spacing={1.5}
                flexDirection="column"
                alignItems="center"
                display="flex"
                m="auto"
              >
                <IconMessages />
                <Typography fontSize={20}>Your messages</Typography>
                <Typography className={styles.text} fontSize={14}>
                  Send beautiful photos and messages to your friends.
                </Typography>
                <Button
                  variant="contained"
                  className={styles.showModalBtn}
                  onClick={() => open()}
                >
                  Send messages
                </Button>
              </Stack>
            </Box>
          </ChatBar>
        )}
      </Stack>
    </Box>
  );
};
