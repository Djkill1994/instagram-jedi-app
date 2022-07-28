import s from "./UserBarMessages.module.scss";
// fix s to styles on all places in the project
import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../api/users.api";
import {
  activeChatUserSelector,
  setActiveUserChat,
} from "../../slices/message.slice";
import { useGetActiveChatUserQuery } from "../../api/activeUser.api";
import { loginSelector } from "../../../Login/slices/login.slice";
import { IActiveChatUser } from "../../../../mocks/data/selectedUsersChat";
import { UserItem } from "../../../../common/components/UserItem";
import { AllUsersWindowModal } from "./AllUsersWindowModal";

export const UserBarMessages: React.FC = () => {
  const { error, isLoading } = useGetUsersQuery();
  const { data: activeChatUsers } = useGetActiveChatUserQuery();
  const authUser = useSelector(loginSelector);
  const activeChatUser = useSelector(activeChatUserSelector);
  const dispatch = useDispatch();

  const handleClickOnUser = (user: IActiveChatUser): void => {
    dispatch(setActiveUserChat(user));
  };

  return (
    <Stack className={s.usersBar}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={s.headerUserBar}
      >
        <Typography
          fontWeight="bolder"
          justifyContent="center"
          width="100%"
          display="flex"
        >
          {authUser.userName}
        </Typography>
        <AllUsersWindowModal />
      </Stack>
      <Stack direction="column" className={s.barMessageItem}>
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
              sizeAvatar={"big"}
              isSelected={true}
              user={user}
              activeChatUser={activeChatUser}
            />
          ))}
        </>
      </Stack>
    </Stack>
  );
};
