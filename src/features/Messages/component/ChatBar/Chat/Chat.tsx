import React from "react";
import { Stack } from "@mui/material";
import s from "./Chat.module.scss";

export const Chat: React.FC = () => {
  return (
    <Stack
      className={s.chat}
      spacing={1}
      alignItems="baseline"
      justifyContent="flex-end"
    >
      <Stack className={s.itemMessage}>Item one</Stack>
      <Stack className={s.itemMessage} direction="row-reverse">
        Item two
      </Stack>
    </Stack>
  );
};
