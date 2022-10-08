import React from "react";
import styles from "./WindowLoginForm.module.scss";
import { ReactComponent as Logo } from "assets/svg/logoIG.svg";
import { BarInstallApps } from "common/components/BarInstallApps";
import { Link } from "react-router-dom";
import { LogInForm } from "../LogInForm";
import { ROUTE_PATHS } from "common/components/App/App";
import { Stack } from "@mui/material";

export const WindowLoginForm: React.FC = () => {
  return (
    <Stack justifyContent="center" className={styles.loginFormWrapper}>
      <Stack
        justifyContent="center"
        alignItems="center"
        className={styles.windowLogin}
      >
        <header>
          <Logo className={styles.logo} />
        </header>
        <LogInForm />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={styles.registrationBarWrapper}
      >
        <span>Don't have an account yet?</span>
        <Link to={ROUTE_PATHS.SignUp}>Sign up</Link>
      </Stack>
      <BarInstallApps />
    </Stack>
  );
};
