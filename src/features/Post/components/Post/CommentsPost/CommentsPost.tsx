import s from "./CommentsPost.module.scss";
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
      className={s.addCommentWrapper}
    >
      <div className={s.emojiPicker}>
        {chosenEmoji && (
          <Picker
            onEmojiClick={(_, emojiObject: any) => setChosenEmoji(emojiObject)}
          />
        )}
      </div>
      <button
        className={s.btnEmoji}
        onClick={() => setChosenEmoji((prevState) => !prevState)}
      >
        <Smile />
      </button>
      <input className={s.inputComment} placeholder="Add to comment" />
      <button className={s.btnComment}>Post</button>
    </Stack>
  );
};
