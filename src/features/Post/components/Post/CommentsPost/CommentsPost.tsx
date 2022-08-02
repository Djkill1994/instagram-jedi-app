import styled from "./CommentsPost.module.scss";
import React, { useState } from "react";
import { ReactComponent as Smile } from "../../../../../assets/svg/smile.svg";
import { Stack } from "@mui/material";
import Picker from "emoji-picker-react";

export const CommentsPost: React.FC = () => {
  const [chosenEmoji, setChosenEmoji] = useState(false);

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      boxSizing="border-box"
      flexDirection="row"
      className={styled.addCommentWrapper}
    >
      <div className={styled.emojiPicker}>
        {chosenEmoji && (
          <Picker
            onEmojiClick={(_, emojiObject: any) => setChosenEmoji(emojiObject)}
          />
        )}
      </div>
      <button
        className={styled.btnEmoji}
        onClick={() => setChosenEmoji((prevState) => !prevState)}
      >
        <Smile />
      </button>
      <input className={styled.inputComment} placeholder="Add to comment" />
      <button className={styled.btnComment}>Post</button>
    </Stack>
  );
};
