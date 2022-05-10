import React, { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import s from "./InputBar.module.scss";
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
      sendMessage({ messageText: inputStr });
      setInputStr("");
    }
  };

  const onEmojiClick = (event: any, emojiObject: any) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowEmoji(false);
  };

  return (
    <Stack className={s.inputBar}>
      <Box component="form" onSubmit={handleSendMessage}>
        <Stack
          className={s.inputWrapper}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <div className={s.emojiPicker}>
            {showEmoji && <Picker onEmojiClick={onEmojiClick} />}
          </div>
          <button
            className={s.btnEmoji}
            onClick={() => setShowEmoji((prevState) => !prevState)}
          >
            <Smile />
          </button>
          <input
            placeholder="Message..."
            className={s.inputText}
            value={inputStr}
            onChange={handleChangeText}
            type="text"
          />
          {inputStr !== "" ? (
            <button type="submit">Send</button>
          ) : (
            <label htmlFor="icon-button-file">
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                className={s.upLoadImage}
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
