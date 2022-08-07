import React from "react";
import styled from "./Login.module.scss";
import { WindowAnimatedPhone } from "./WindowAnimatedPhone";
import { WindowLoginForm } from "./WindowLoginForm";
import { Footer } from "../../../common/components/Footer";
import { Stack } from "@mui/material";

export const Login: React.FC = () => {
  return (
    <div className={styled.wrapperPage}>
      <Stack direction="row" className={styled.wrapperWindow}>
        <WindowAnimatedPhone />
        <WindowLoginForm />
      </Stack>
      <Footer />
    </div>
  );
};
