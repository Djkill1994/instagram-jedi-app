import s from "./UserItem.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import clsx from "clsx";
import { IUser } from "../../../mocks/data/users";

export interface IUserItemProps {
  userName: string;
  onClick: (user: IUser | any) => void;
  sizeAvatar: any;
  isSelected?: boolean;
  userAvatar: string;
  user?: IUser | any;
  activeChatUser?: IUser | any;
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
          ? clsx(s.userMessageItem, {
              [s.active]: user.id === activeChatUser?.id,
            })
          : s.itemUser
      }
      onClick={onClick}
    >
      <Avatar alt="User Avatar" src={userAvatar} sx={sizeAvatar} />
      <Stack direction="column">
        <Typography fontWeight="600" fontSize={14} className={s.nameModalBox}>
          {userName}
        </Typography>
      </Stack>
    </Stack>
  );
};
