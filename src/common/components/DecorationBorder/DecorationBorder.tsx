import React from "react";
import styles from "./DecorationBorder.module.scss";
import { Stack, Typography } from "@mui/material";

export const DecorationBorder: React.FC = () => {
  return (
    <Stack
      spacing={1.7}
      justifyContent="center"
      alignItems="center"
      direction="row"
      className={styles.stack}
    >
      <div className={styles.line} />
      <Typography fontSize={14}>OR</Typography>
      <div className={styles.line} />
    </Stack>
  );
};
