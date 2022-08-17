import React, { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import styled from "./InputBar.module.scss";
import { ReactComponent as UploadImages } from "../../../../../assets/svg/uploadImages.svg";
import { EmojiBar } from "../../../../../common/components/EmojiBar";

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
    <Stack className={styled.inputBar}>
      <Box component="form" onSubmit={handleSendMessage}>
        <Stack
          className={styled.inputWrapper}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <EmojiBar setInputStr={setInputStr} />
          <input
            placeholder="Message..."
            className={styled.inputText}
            value={inputStr}
            onChange={handleChangeText}
            type="text"
          />
          {inputStr ? (
            <button type="submit" className={styled.sendBtn}>
              Send
            </button>
          ) : (
            <label htmlFor="icon-button-file">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                className={styled.upLoadImage}
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
