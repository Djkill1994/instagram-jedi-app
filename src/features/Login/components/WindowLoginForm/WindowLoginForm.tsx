import React from "react";
import styled from "./WindowLoginForm.module.scss";
import logo from "../../../../assets/icon/1b47f9d0e595.png";
import { BarInstallApps } from "../../../../common/components/BarInstallApps";
import { Link } from "react-router-dom";
import { LogInForm } from "../LogInForm";
import { ROUTE_PATHS } from "../../../../common/components/App/App";
import { Stack } from "@mui/material";

export const WindowLoginForm: React.FC = () => {
  return (
    <Stack justifyContent="center" className={styled.loginFormWrapper}>
      <Stack
        justifyContent="center"
        alignItems="center"
        className={styled.windowLogin}
      >
        <header className={styled.headerLogin}>
          <img alt={"Logo"} src={logo} className={styled.logoWrapper} />
        </header>
        <LogInForm />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={styled.registrationBarWrapper}
      >
        <span>Don't have an account yet?</span>
        <Link to={ROUTE_PATHS.SignUp}>Sign up</Link>
      </Stack>
      <BarInstallApps />
    </Stack>
  );
};
