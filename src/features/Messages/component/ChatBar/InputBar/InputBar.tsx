import React, { useState } from "react";
import { IconButton, Stack, styled } from "@mui/material";
import s from "./InputBar.module.scss";
import Picker from "emoji-picker-react";
import { ReactComponent as Smile } from "../../../../../assets/svg/smile.svg";
import { ReactComponent as UploadImages } from "../../../../../assets/svg/uploadImages.svg";

export const InputBar: React.FC = () => {
  const [chosenEmoji, setChosenEmoji] = useState(false);

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Stack className={s.inputBar}>
      <Stack
        className={s.inputWrapper}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <div className={s.emojiPicker}>
          {chosenEmoji && (
            <Picker
              onEmojiClick={(_, emojiObject: any) =>
                setChosenEmoji(emojiObject)
              }
            />
          )}
        </div>
        <button
          className={s.btnEmoji}
          onClick={() => setChosenEmoji((prevState) => !prevState)}
        >
          <Smile />
        </button>
        <input placeholder="Message..." className={s.inputText} />
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <UploadImages />
          </IconButton>
        </label>
      </Stack>
    </Stack>
  );
};
