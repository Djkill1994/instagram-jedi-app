import styled from "../../../features/Messages/component/ChatSection/InputBar/InputBar.module.scss";
import Picker from "emoji-picker-react";
import { ReactComponent as Smile } from "../../../assets/svg/smile.svg";
import React, { useState } from "react";

interface IProps {
  onEmojiSelected: (emoji: (prevState: string) => string) => void;
}

export const EmojiBar: React.FC<IProps> = ({ onEmojiSelected }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const onEmojiClick = (emoji: string): void => {
    onEmojiSelected((prevState) => prevState + emoji);
    setShowEmoji(false);
  };

  return (
    <>
      <div className={styled.emojiPicker}>
        {showEmoji && (
          <Picker onEmojiClick={(_, { emoji }) => onEmojiClick(emoji)} />
        )}
      </div>
      <button
        type="button"
        className={styled.btnEmoji}
        onClick={() => setShowEmoji((prevState) => !prevState)}
      >
        <Smile />
      </button>
    </>
  );
};
