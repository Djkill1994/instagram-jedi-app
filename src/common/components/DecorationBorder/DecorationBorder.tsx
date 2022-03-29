import React from "react";
import s from "./DecorationBorder.module.scss";
import { Stack, Typography } from "@mui/material";

export const DecorationBorder: React.FC = () => {
  return (
    <Stack
      spacing={1.7}
      justifyContent="center"
      alignItems="center"
      direction="row"
      className={s.stack}
    >
      <div className={s.line} />
      <Typography fontSize={14}>OR</Typography>
      <div className={s.line} />
    </Stack>
  );
};
