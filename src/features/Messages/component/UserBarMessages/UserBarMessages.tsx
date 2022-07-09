import s from "./UserBarMessages.module.scss";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { ReactComponent as NewMessage } from "../../../../assets/svg/newMessage.svg";
import clsx from "clsx";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useGetUsersQuery } from "../../api/users.api";
import { setActiveUserId } from "../../slices/Message.slice";
import { useActiveUserMutation } from "../../api/activeUser.api";
import { useGetActiveChatUserQuery } from "../../api/activeChatUser.api";

export const UserBarMessages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const { data: users, error, isLoading } = useGetUsersQuery();
  const { data: activeChatUser } = useGetActiveChatUserQuery();
  const [activeUser] = useActiveUserMutation();
  const userData = useSelector((state: RootState) => state.loginUser);
  const dispatch = useDispatch();

  const handleOpen = () => {
    return setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleClick = (user: any) => {
    handleClose();
    activeUser({
      activeUserId: user.id,
      authUserId: userData.userId,
    });
    return dispatch(setActiveUserId(user.id));
  };

  return (
    <Stack className={s.usersBar}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={s.modalWindow}
      >
        <Box className={s.modalBox}>
          <Typography fontWeight="bold" className={s.titleModalBox}>
            New Message
          </Typography>
          <div className={s.modalBoxLine}></div>
          <Stack spacing={1.5} className={s.itemModalBox}>
            {isLoading && <CircularProgress />}
            {error && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            {users &&
              users.map((user, index) => (
                <Stack
                  key={index}
                  alignItems="center"
                  flexDirection="row"
                  className={s.itemUser}
                  onClick={() => handleClick(user)}
                >
                  <Avatar
                    key={index}
                    alt="User Avatar"
                    src={user.userAvatar}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Stack direction="column">
                    <Typography
                      key={index}
                      fontWeight="600"
                      fontSize={14}
                      className={s.nameModalBox}
                    >
                      {user.userName}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
          </Stack>
        </Box>
      </Modal>
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
          {userData.userName}
        </Typography>
        <button onClick={handleOpen}>
          <NewMessage />
        </button>
      </Stack>
      <Stack direction="column" className={s.barMessageItem}>
        <>
          {isLoading && <CircularProgress />}
          {error && (
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
          )}
          {activeChatUser &&
            activeChatUser.map((user, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing={2}
                onClick={() => setActiveIndex(index)}
                className={clsx(
                  s.userMessageItem,
                  index === activeIndex ? s.active : null
                )}
              >
                <Avatar
                  key={index}
                  src={user.userAvatar}
                  className={s.avatar}
                />
                <Stack direction="column">
                  <Typography fontSize={14}>{user.userName}</Typography>
                </Stack>
              </Stack>
            ))}
        </>
      </Stack>
    </Stack>
  );
};
