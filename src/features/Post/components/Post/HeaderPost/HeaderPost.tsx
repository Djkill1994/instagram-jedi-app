import s from "./HeaderPost.module.scss";
import React from "react";
import { Avatar, Stack } from "@mui/material";

interface HeaderPostProps {
  userAvatar: string;
  userName: string;
}

export const HeaderPost: React.FC<HeaderPostProps> = ({
  userAvatar,
  userName,
}) => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      className={s.headerBar}
    >
      <Stack alignItems="center" direction="row" spacing={2}>
        <Avatar src={userAvatar} alt="Avatar" className={s.avatar} />
        <span className={s.nameAccount}>{userName}</span>
      </Stack>
      <svg
        aria-label="Дополнительно"
        className="_8-yf5 "
        color="#262626"
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="6" cy="12" r="1.5" />
        <circle cx="18" cy="12" r="1.5" />
      </svg>
    </Stack>
  );
};
