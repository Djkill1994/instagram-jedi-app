import styles from "./CommentsPost.module.scss";
import React, { useState } from "react";
import { ReactComponent as Smile } from "assets/svg/smile.svg";
import { Button, Stack } from "@mui/material";
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
      className={styles.addCommentWrapper}
    >
      <div className={styles.emojiPicker}>
        {showEmoji && <Picker onEmojiClick={onEmojiClick} />}
      </div>
      <button
        className={styles.btnEmoji}
        onClick={() => setShowEmoji((prevState) => !prevState)}
      >
        <Smile />
      </button>
      <input className={styles.inputComment} placeholder="Add to comment" />
      <Button disableTouchRipple variant="text">
        Post
      </Button>
    </Stack>
  );
};
