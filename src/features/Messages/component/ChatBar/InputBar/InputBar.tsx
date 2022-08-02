import React, { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import styled from "./InputBar.module.scss";
import Picker from "emoji-picker-react";
import { ReactComponent as Smile } from "../../../../../assets/svg/smile.svg";
import { ReactComponent as UploadImages } from "../../../../../assets/svg/uploadImages.svg";

export const InputBar: React.FC<any> = ({ sendMessage }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [inputStr, setInputStr] = useState("");

  const handleChangeText = (e: any) => {
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

  const onEmojiClick = (event: any, emojiObject: any) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowEmoji(false);
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
          <div className={styled.emojiPicker}>
            {showEmoji && <Picker onEmojiClick={onEmojiClick} />}
          </div>
          <button
            className={styled.btnEmoji}
            onClick={() => setShowEmoji((prevState) => !prevState)}
          >
            <Smile />
          </button>
          <input
            placeholder="Message..."
            className={styled.inputText}
            value={inputStr}
            onChange={handleChangeText}
            type="text"
          />
          {inputStr !== "" ? (
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
