import styled from "./UserItem.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import clsx from "clsx";

const AVATAR_SIZES = {
  small: { width: 24, height: 24 },
  large: { width: 50, height: 50 },
  big: { width: 56, height: 56 },
};

type AvatarSizes = "small" | "large" | "big";

export interface IUserItemProps {
  userName: string;
  onClick?: VoidFunction;
  avatarSize?: AvatarSizes;
  isSelected?: boolean;
  userAvatar: string;
}

export const UserItem = ({
  userName,
  onClick,
  avatarSize = "small",
  isSelected,
  userAvatar,
}: IUserItemProps) => {
  return (
    <Stack
      alignItems="center"
      flexDirection="row"
      className={clsx(styled.userMessageItem, { [styled.active]: isSelected })}
      onClick={onClick}
    >
      <Avatar
        alt="User Avatar"
        src={userAvatar}
        sx={AVATAR_SIZES[avatarSize]}
      />
      <Typography
        fontWeight="600"
        fontSize={14}
        className={styled.nameModalBox}
        ml={1.5}
      >
        {userName}
      </Typography>
    </Stack>
  );
};
