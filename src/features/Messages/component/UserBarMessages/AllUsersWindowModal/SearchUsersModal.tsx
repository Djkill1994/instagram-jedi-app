import styled from "./AllUsersWindowModal.module.scss";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { UserItem } from "../../../../../common/components/UserItem";
import React, { VFC } from "react";
import { useModal } from "../../../../../common/hooks/useModal";
import { useGetUsersQuery } from "../../../../User/api/users.api";
import { useAddActiveUserMutation } from "../../../api/activeChatUser.api";
import { ReactComponent as NewMessage } from "../../../../../assets/svg/newMessage.svg";

export const SearchUsersModal: VFC = () => {
  const { isOpened, open, close } = useModal();
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addActiveUser] = useAddActiveUserMutation();

  return (
    <>
      <Modal
        open={isOpened}
        onClose={close}
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
                  }).then(close)
                }
                avatarSize={"large"}
              />
            ))}
          </Stack>
        </Box>
      </Modal>
      <Button onClick={open}>
        <NewMessage />
      </Button>
    </>
  );
};
