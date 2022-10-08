import { useGetUsersQuery } from "../../../User/api/users.api";
import { useAddActiveUserMutation } from "../../api/activeChatUser.api";
import {
  Alert,
  Box,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./SelectChatUserModal.module.scss";
import { UserItem } from "common/components/UserItem";
import React, { VFC } from "react";

interface IProps {
  isOpened: boolean;
  onClose: () => void;
}

export const SelectChatUserModal: VFC<IProps> = ({ isOpened, onClose }) => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addActiveUser] = useAddActiveUserMutation();

  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.modalWindow}
    >
      <Box className={styles.modalBox}>
        <Typography fontWeight="bold" align="center" m={1.5}>
          New Message
        </Typography>
        <div className={styles.modalBoxLine}></div>
        <Stack spacing={1.5} className={styles.itemModalBox}>
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
