import s from "./UserBarMessages.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { ReactComponent as NewMessage } from "../../../../assets/svg/newMessage.svg";
import clsx from "clsx";
import React, { useState } from "react";
import { useLocalStorage } from "react-use";

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

  // const [username, setUsername] = useLocalStorage("", "");
  // // локальное состояние для комнаты
  // const [roomId, setRoomId] = useState("free");
  // const linkRef = useRef(null);
  //
  // const handleChangeRoom = (e) => {
  //   setRoomId(e.target.value);
  // };
  //
  // // имитируем отправку формы
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // выполняем нажатие кнопки
  //   linkRef.current.click();
  // };

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
          {messagesUser[0].userName}
        </Typography>
        <button>
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
