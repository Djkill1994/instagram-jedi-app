import styled from "./HeaderPost.module.scss";
import React from "react";
import { Avatar, Stack } from "@mui/material";
import { ReactComponent as Additionally } from "../../../../../assets/svg/additionally.svg";

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
      className={styled.headerBar}
    >
      <Stack alignItems="center" direction="row" spacing={2}>
        <Avatar src={userAvatar} alt="Avatar" className={styled.avatar} />
        <span className={styled.nameAccount}>{userName}</span>
      </Stack>
      <Additionally />
    </Stack>
  );
};
