import styled from "./UserBarMessages.module.scss";
import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../../User/api/users.api";
import {
  activeChatUserSelector,
  setActiveUserChat,
} from "../../slices/message.slice";
import { useGetActiveChatUserQuery } from "../../api/activeChatUser.api";
import { loginSelector } from "../../../Login/slices/login.slice";
import { IActiveChatUser } from "../../../../mocks/data/selectedUsersChat";
import { UserItem } from "../../../../common/components/UserItem";
import { AllUsersWindowModal } from "./AllUsersWindowModal";

export const UserBarMessages: React.FC = () => {
  const { error, isLoading } = useGetUsersQuery();
  const { data: activeChatUsers } = useGetActiveChatUserQuery();
  const userData = useSelector(loginSelector);
  const activeChatUser = useSelector(activeChatUserSelector);
  const dispatch = useDispatch();

  const handleClickOnUser = (user: IActiveChatUser): void => {
    dispatch(setActiveUserChat(user));
  };

  return (
    <Stack className={styled.usersBar}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={styled.headerUserBar}
      >
        <Typography
          fontWeight="bolder"
          justifyContent="center"
          width="100%"
          display="flex"
        >
          {userData.authUser?.userName}
        </Typography>
        <AllUsersWindowModal />
      </Stack>
      <Stack direction="column" className={styled.barMessageItem}>
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
