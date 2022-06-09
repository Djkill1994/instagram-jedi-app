import s from "./UserBarMessages.module.scss";
import { Avatar, Box, Modal, Stack, Typography } from "@mui/material";
import { ReactComponent as NewMessage } from "../../../../assets/svg/newMessage.svg";
import clsx from "clsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

interface MessagesUserState {
  userName: string;
  userAvatar: string;
  lastVisit: string;
}

const messagesUser: MessagesUserState[] = [
  {
    userName: "Vlad",
    userAvatar:
      "https://i.pinimg.com/736x/84/60/94/846094561ef58c77eb5c38b59b9a1e4f.jpg",
    lastVisit: "2",
  },
  {
    userName: "Triss",
    userAvatar:
      "https://images.hdqwalls.com/wallpapers/thumb/wanda-what-if-4k-2o.jpg",
    lastVisit: "5",
  },
  {
    userName: "Geralt",
    userAvatar: "https://avatarfiles.alphacoders.com/148/thumb-148716.png",
    lastVisit: "1",
  },
];

export const UserBarMessages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const userData = useSelector((state: RootState) => state.loginUser);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            {messagesUser.map((u, index) => (
              <Stack
                alignItems="center"
                flexDirection="row"
                className={s.itemUser}
              >
                <Avatar
                  alt="User Avatar"
                  src={u.userAvatar}
                  sx={{ width: 50, height: 50 }}
                />
                <Stack direction="column">
                  <Typography
                    fontWeight="600"
                    fontSize={14}
                    className={s.nameModalBox}
                  >
                    {u.userName}
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
          {messagesUser.map((u, index) => (
            <Stack
              key={1}
              direction="row"
              alignItems="center"
              spacing={2}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                s.userMessageItem,
                index === activeIndex ? s.active : null
              )}
            >
              <Avatar src={u.userAvatar} className={s.avatar} />
              <Stack direction="column">
                <Typography fontSize={14}>{u.userName}</Typography>
                <Typography fontSize={14} className={s.lastMessageText}>
                  Active {u.lastVisit}h ago
                </Typography>
              </Stack>
            </Stack>
          ))}
        </>
      </Stack>
    </Stack>
  );
};
