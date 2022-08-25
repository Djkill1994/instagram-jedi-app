import { useGetUsersQuery } from "../../../features/User/api/users.api";
import { useAddActiveUserMutation } from "../../../features/Messages/api/activeChatUser.api";
import {
  Alert,
  Box,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import styled from "./ModalWindow.module.scss";
import { UserItem } from "../UserItem";
import React, { VFC } from "react";

interface IProps {
  isOpened: boolean;
  onClose: () => void;
}

export const ModalWindow: VFC<IProps> = ({ isOpened, onClose }) => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addActiveUser] = useAddActiveUserMutation();

  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styled.modalWindow}
    >
      <Box className={styled.modalBox}>
        <Typography fontWeight="bold" align="center" m={1.5}>
          New Message
        </Typography>
        <div className={styled.modalBoxLine}></div>
        <Stack spacing={1.5} className={styled.itemModalBox}>
          {isLoading && <CircularProgress />}
          {error && (
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
          )}
          {users?.map((user) => (
            <UserItem
              userName={user.userName}
              key={user.id}
              userAvatar={user.userAvatar}
              onClick={() =>
                addActiveUser({
                  id: user.id,
                }).then(onClose)
              }
              avatarSize={"large"}
            />
          ))}
        </Stack>
      </Box>
    </Modal>
  );
};
