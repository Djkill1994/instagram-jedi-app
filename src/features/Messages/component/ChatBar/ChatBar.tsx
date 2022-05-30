import React from "react";
import s from "./ChatBar.module.scss";
import { Avatar, Stack, Typography } from "@mui/material";
import { Chat } from "./Chat";
import { InputBar } from "./InputBar";
import { useChat } from "../../hooks/useChat";

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

export const ChatBar: React.FC = () => {
  const { users, messages, sendMessage } = useChat("1");
  console.log(users);
  console.log(messages);
  return (
    <Stack className={s.chatBar} direction="column">
      <Stack
        direction="row"
        className={s.headerChat}
        alignItems="center"
        spacing={2}
      >
        <Avatar
          src={messagesUser[1].userAvatar}
          className={s.avatarHeaderChat}
        />
        <Stack direction="column">
          <Typography fontWeight="bolder">
            {messagesUser[1].userName}
          </Typography>
          <Typography fontSize={12} className={s.lastMessageText}>
            Active {messagesUser[1].lastVisit}h ago
          </Typography>
        </Stack>
      </Stack>
      <Chat />
      <InputBar sendMessage={sendMessage} />
    </Stack>
  );
};
