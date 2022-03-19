import s from "./CommentsPost.module.scss";
import React, { useState } from "react";
import { EmojiPicker } from "../EmojiPicker";
import { ReactComponent as Smile } from "../../../../../assets/svg/smile.svg";

export const CommentsPost: React.FC = () => {
  const [chosenEmoji, setChosenEmoji] = useState(false);
  return (
    <div className={s.addCommentWrapper}>
      <div className={s.wrapperContainComment}>
        <div className={s.emojiPickerWrapper}>
          {chosenEmoji && <EmojiPicker />}
        </div>
        <button
          className={s.emojiPicker}
          onClick={() => setChosenEmoji((prevState) => !prevState)}
        >
          <Smile />
        </button>
        <div className={s.inputComments}>
          <input placeholder="Add to comment" />
        </div>
      </div>
      <div className={s.btnAddComment}>
        <div className={s.btnComment} role="button">
          Add Comment
        </div>
      </div>
    </div>
  );
};
