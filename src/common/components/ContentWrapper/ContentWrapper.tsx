import s from "./ContentWrapper.module.scss";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import React from "react";
import { Stack } from "@mui/material";

export const ContentWrapper: React.FC = ({ children }) => {
  return (
    <Stack
      direction="row"
      flexDirection="row-reverse"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Header />
      <Navbar />
      <Stack className={s.appWrapperContent}>{children}</Stack>
    </Stack>
  );
};
