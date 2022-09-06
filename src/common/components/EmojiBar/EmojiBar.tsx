import styled from "../../../features/Messages/components/ChatSection/InputBar/InputBar.module.scss";
import Picker from "emoji-picker-react";
import { ReactComponent as Smile } from "../../../assets/svg/smile.svg";
import React, { useState } from "react";
import { Button } from "@mui/material";

interface IProps {
  onEmojiSelected: (emoji: string) => void;
}

export const EmojiBar: React.FC<IProps> = ({ onEmojiSelected }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const onEmojiClick = (emoji: string): void => {
    onEmojiSelected(emoji);
    setShowEmoji(false);
  };

  return (
    <>
      <div className={styled.emojiPicker}>
        {showEmoji && (
          <Picker onEmojiClick={(_, { emoji }) => onEmojiClick(emoji)} />
        )}
      </div>
      <Button
        variant="text"
        disableTouchRipple
        type="button"
        onClick={() => setShowEmoji((prevState) => !prevState)}
      >
        <Smile />
      </Button>
    </>
  );
};
