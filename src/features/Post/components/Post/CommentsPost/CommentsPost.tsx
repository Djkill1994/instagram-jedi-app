import styled from "./CommentsPost.module.scss";
import React, { useState } from "react";
import { ReactComponent as Smile } from "../../../../../assets/svg/smile.svg";
import { Stack } from "@mui/material";
import Picker, { IEmojiData } from "emoji-picker-react";

export const CommentsPost: React.FC = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [inputStr, setInputStr] = useState("");

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowEmoji(false);
  };

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      boxSizing="border-box"
      flexDirection="row"
      className={styled.addCommentWrapper}
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
      <input className={styled.inputComment} placeholder="Add to comment" />
      <button className={styled.btnComment}>Post</button>
    </Stack>
  );
};
