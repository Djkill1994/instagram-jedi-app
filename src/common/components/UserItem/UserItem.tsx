import styled from "./UserItem.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import clsx from "clsx";
import { IUser } from "../../../mocks/data/users";
import { IActiveChatUser } from "../../../mocks/data/selectedUsersChat";

type AvatarSize = "small" | "large" | "big";

export interface IUserItemProps {
  userName: string;
  onClick: (user: IUser | any) => void;
  sizeAvatar: AvatarSize;
  isSelected?: boolean;
  userAvatar: string;
  user?: IActiveChatUser;
  activeChatUser?: IActiveChatUser;
}

export const UserItem = ({
  userName,
  onClick,
  sizeAvatar,
  isSelected,
  userAvatar,
  user,
  activeChatUser,
}: IUserItemProps) => {
  const sizesAvatar = {
    small: { width: 24, height: 24 },
    large: { width: 50, height: 50 },
    big: { width: 56, height: 56 },
  };

  if (sizeAvatar === "small") {
    sizeAvatar = sizesAvatar.small;
  } else if (sizeAvatar === "large") {
    sizeAvatar = sizesAvatar.large;
  } else if (sizeAvatar === "big") {
    sizeAvatar = sizesAvatar.big;
  }

  return (
    <Stack
      alignItems="center"
      flexDirection="row"
      className={
        isSelected === true
          ? clsx(styled.userMessageItem, {
              [styled.active]: user?.id === activeChatUser?.id,
            })
          : styled.itemUser
      }
      onClick={onClick}
    >
      <Avatar alt="User Avatar" src={userAvatar} sx={sizeAvatar} />
      <Stack direction="column">
        <Typography
          fontWeight="600"
          fontSize={14}
          className={styled.nameModalBox}
        >
          {userName}
        </Typography>
      </Stack>
    </Stack>
  );
};
