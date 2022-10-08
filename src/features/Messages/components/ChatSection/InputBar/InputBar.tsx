import React, { useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import styles from "./InputBar.module.scss";
import { ReactComponent as UploadImages } from "assets/svg/uploadImages.svg";
import { EmojiBar } from "common/components/EmojiBar";

interface IProps {
  sendMessage: (inputStr: string) => void;
}

export const InputBar: React.FC<IProps> = ({ sendMessage }) => {
  const [inputStr, setInputStr] = useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputStr(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = inputStr.trim();
    if (trimmed) {
      sendMessage(inputStr);
      setInputStr("");
    }
  };

  return (
    <Stack padding="5px 20px">
      <Box component="form" onSubmit={handleSendMessage}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          padding="0 10px"
          borderRadius="40px"
          border="1px solid #dbdbdb"
          height="35px"
        >
          <EmojiBar
            onEmojiSelected={(emoji) =>
              setInputStr((prevState) => prevState + emoji)
            }
          />
          <input
            placeholder="Message..."
            className={styles.inputText}
            value={inputStr}
            onChange={handleChangeText}
            type="text"
          />
          {inputStr ? (
            <Button type="submit" variant="text" disableTouchRipple>
              Send
            </Button>
          ) : (
            <label htmlFor="icon-button-file">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                className={styles.upLoadImage}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <UploadImages />
              </IconButton>
            </label>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
