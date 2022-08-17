import styled from "../../../features/Messages/component/ChatSection/InputBar/InputBar.module.scss";
import Picker, { IEmojiData } from "emoji-picker-react";
import { ReactComponent as Smile } from "../../../assets/svg/smile.svg";
import React, { useState } from "react";

export const EmojiBar = (setInputStr: any) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    setInputStr((prevState: string) => prevState + emojiObject.emoji);
    setShowEmoji(false);
  };

  return (
    <>
      <div className={styled.emojiPicker}>
        {showEmoji && <Picker onEmojiClick={onEmojiClick} />}
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
