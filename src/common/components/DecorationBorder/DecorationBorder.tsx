import React from "react";
import styled from "./DecorationBorder.module.scss";
import { Stack, Typography } from "@mui/material";

export const DecorationBorder: React.FC = () => {
  return (
    <Stack
      spacing={1.7}
      justifyContent="center"
      alignItems="center"
      direction="row"
      className={styled.stack}
    >
      <div className={styled.line} />
      <Typography fontSize={14}>OR</Typography>
      <div className={styled.line} />
    </Stack>
  );
};
