import styled from "./ContentWrapper.module.scss";
import { Header } from "../Header";
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
      <Stack className={styled.appWrapperContent}>{children}</Stack>
    </Stack>
  );
};
