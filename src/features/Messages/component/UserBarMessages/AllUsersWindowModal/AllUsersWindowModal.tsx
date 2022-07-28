import s from "./AllUsersWindowModal.module.scss";
import {
  Alert,
  Box,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { UserItem } from "../../../../../common/components/UserItem";
import React from "react";
import { useModal } from "../../../../../common/hooks/useModal";
import { useGetUsersQuery } from "../../../api/users.api";
import { useAddActiveUserMutation } from "../../../api/activeUser.api";
import { ReactComponent as NewMessage } from "../../../../../assets/svg/newMessage.svg";

export const AllUsersWindowModal = () => {
  const { isOpened, open, close } = useModal();
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addActiveUser] = useAddActiveUserMutation();

  return (
    <>
      <Modal
        open={isOpened}
        onClose={() => close()}
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
            {users?.map((user) => (
              <UserItem
                userName={user.userName}
                key={user.id}
                userAvatar={user.userAvatar}
                onClick={() =>
                  addActiveUser({
                    id: user.id,
                  }).then(() => close())
                }
                sizeAvatar={"large"}
              />
            ))}
          </Stack>
        </Box>
      </Modal>
      <button onClick={() => open()}>
        <NewMessage />
      </button>
    </>
  );
};
