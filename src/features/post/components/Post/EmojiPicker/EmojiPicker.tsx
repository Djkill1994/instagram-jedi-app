import React, { useState } from "react";
import Picker from "emoji-picker-react";

export const EmojiPicker = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker
        onEmojiClick={(_, emojiObject: any) => setChosenEmoji(emojiObject)}
      />
    </div>
  );
};
