import React from "react";
import s from "./DecorationBorder.module.scss";
import { Stack } from "@mui/material";

export const DecorationBorder: React.FC = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      direction="row"
      className={s.stack}
    >
      <div className={s.line} />
      <span>OR</span>
      <div className={s.line} />
    </Stack>
  );
};
