import s from "./Messages.module.scss";
import {
  Avatar,
  Box,
  IconButton,
  Input,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import clsx from "clsx";
import { ReactComponent as NewMessage } from "../../../assets/svg/newMessage.svg";
import { PhotoCamera } from "@mui/icons-material";
import Picker from "emoji-picker-react";
import { ReactComponent as Smile } from "../../../assets/svg/smile.svg";
import { ReactComponent as UploadImages } from "../../../assets/svg/uploadImages.svg";

interface MessagesUserState {
  userName: string;
  userAvatar: string;
  lastVisit: string;
  messages: string;
}

const messagesUser: MessagesUserState[] = [
  {
    userName: "Vlad",
    userAvatar:
      "https://i.pinimg.com/736x/84/60/94/846094561ef58c77eb5c38b59b9a1e4f.jpg",
    lastVisit: "2",
    messages: "Hello world",
  },
  {
    userName: "Triss",
    userAvatar:
      "https://images.hdqwalls.com/wallpapers/thumb/wanda-what-if-4k-2o.jpg",
    lastVisit: "5",
    messages: "Hello Vlad",
  },
  {
    userName: "Geralt",
    userAvatar: "https://avatarfiles.alphacoders.com/148/thumb-148716.png",
    lastVisit: "1",
    messages: "Hello People",
  },
];

export const Messages: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [chosenEmoji, setChosenEmoji] = useState(false);

  const handleClick = (index: any) => {
    setActiveIndex(index);
  };
  const Input = styled("input")({
    display: "none",
  });

  return (
    <Box role="main" className={s.messagesPage}>
      <Stack direction="row">
        <Stack className={s.usersBar}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={s.headerUserBar}
          >
            <div className={s.invBlock} />
            <Typography fontWeight="bolder">vlad</Typography>
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
                  onClick={() => handleClick(index)}
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
          <Stack
            className={s.chat}
            spacing={1}
            alignItems="baseline"
            justifyContent="flex-end"
          >
            <Stack className={s.itemMessage}>Item one</Stack>
            <Stack className={s.itemMessage} direction="row-reverse">
              Item two
            </Stack>
          </Stack>
          <Stack className={s.inputBar}>
            <Stack
              className={s.inputWrapper}
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row"
            >
              <div className={s.emojiPicker}>
                {chosenEmoji && (
                  <Picker
                    onEmojiClick={(_, emojiObject: any) =>
                      setChosenEmoji(emojiObject)
                    }
                  />
                )}
              </div>
              <button
                className={s.btnEmoji}
                onClick={() => setChosenEmoji((prevState) => !prevState)}
              >
                <Smile />
              </button>

              <input placeholder="Message..." className={s.inputText} />
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <UploadImages />
                </IconButton>
              </label>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
