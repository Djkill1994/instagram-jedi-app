import React from "react";
import styles from "./Login.module.scss";
import { WindowAnimatedPhone } from "./WindowAnimatedPhone";
import { WindowLoginForm } from "./WindowLoginForm";
import { Footer } from "../../../common/components/Footer";
import { Stack } from "@mui/material";

export const Login: React.FC = () => {
  return (
    <div className={styles.wrapperPage}>
      <Stack direction="row" className={styles.wrapperWindow}>
        <WindowAnimatedPhone />
        <WindowLoginForm />
      </Stack>
      <Footer />
    </div>
  );
};
