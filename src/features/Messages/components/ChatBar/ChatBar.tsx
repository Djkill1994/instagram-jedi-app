import React, { FC, ReactNode } from "react";
import styles from "./ChatBar.module.scss";
import { Stack, Typography } from "@mui/material";

interface IChatBarProps {
  senderAvatar?: ReactNode;
  senderUserName?: string;
}

export const ChatBar: FC<IChatBarProps> = ({
  children,
  senderUserName,
  senderAvatar,
}) => {
  return (
    <Stack direction="column" className={styles.chatSection}>
      {senderAvatar && (
        <Stack
          direction="row"
          className={styles.headerChat}
          alignItems="center"
          spacing={2}
        >
          {senderAvatar}
          <Stack direction="column">
            <Typography fontWeight="bolder">{senderUserName}</Typography>
          </Stack>
        </Stack>
      )}
      {children}
    </Stack>
  );
};
