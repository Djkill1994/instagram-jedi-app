import React from "react";
import s from "./WindowLoginForm.module.scss";
import logo from "../../../../assets/icon/1b47f9d0e595.png";
import { BarInstallApps } from "../../../../common/components/BarInstallApps";
import { Link } from "react-router-dom";
import { LogInForm } from "../LogInForm";
import { ROUTE_PATHS } from "../../../../common/components/App/App";
import { Stack } from "@mui/material";
import { useLoginMutation } from "../../api/login.api";

export const WindowLoginForm: React.FC = () => {
  const [isError] = useLoginMutation();
  return (
    <Stack justifyContent="center" className={s.loginFormWrapper}>
      <Stack
        justifyContent="center"
        alignItems="center"
        className={s.windowLogin}
      >
        <header className={s.headerLogin}>
          <img alt={"Logo"} src={logo} className={s.logoWrapper} />
        </header>
        <LogInForm />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={s.registrationBarWrapper}
      >
        <span>Don't have an account yet?</span>
        <Link to={ROUTE_PATHS.SignUp}>Sign up</Link>
      </Stack>
      <BarInstallApps />
    </Stack>
  );
};
