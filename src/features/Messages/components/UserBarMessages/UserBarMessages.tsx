import styles from "./UserBarMessages.module.scss";
import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import React, { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../../User/api/users.api";
import {
  activeChatUserSelector,
  setActiveUserChat,
} from "../../slices/message.slice";
import { useGetActiveChatUserQuery } from "../../api/activeChatUser.api";
import { loginSelector } from "../../../Login/slices/login.slice";
import { IActiveChatUsers } from "mocks/data/selectedUsersChat";
import { UserItem } from "common/components/UserItem";
import { SearchUsersModal } from "./SearchUsersModal";

export const UserBarMessages: VFC = () => {
  const { error, isLoading } = useGetUsersQuery();
  const { data: activeChatUsers } = useGetActiveChatUserQuery();
  const userData = useSelector(loginSelector);
  const activeChatUser = useSelector(activeChatUserSelector);
  const dispatch = useDispatch();

  const handleClickOnUser = (user: IActiveChatUsers): void => {
    dispatch(setActiveUserChat(user));
  };

  return (
    <Stack className={styles.usersBar}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={styles.headerUserBar}
      >
        <Typography
          fontWeight="bolder"
          justifyContent="center"
          width="100%"
          display="flex"
        >
          {userData.authUser?.userName}
        </Typography>
        <SearchUsersModal />
      </Stack>
      <Stack direction="column" mt={2}>
        <>
          {isLoading && <CircularProgress />}
          {error && (
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
          )}
          {activeChatUsers?.map((user) => (
            <UserItem
              userName={user.userName}
              key={user.id}
              userAvatar={user.userAvatar}
              onClick={() => handleClickOnUser(user)}
              avatarSize={"big"}
              isSelected={user.id === activeChatUser?.id}
            />
          ))}
        </>
      </Stack>
    </Stack>
  );
};
