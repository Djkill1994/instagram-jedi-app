import React from "react";
import s from "./WindowLoginForm.module.scss";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import { BarInstallApps } from "../../../common/components/BarInstallApps";
import { Link } from "react-router-dom";
import { LogInForm } from "../LogInForm";
import { ROUTE_PATHS } from "../../../common/components/App/App";

export const WindowLoginForm: React.FC = () => {
  return (
    <div className={s.loginFormWrapper}>
      <div className={s.windowLogin}>
        <header className={s.headerLogin}>
          <div className={s.logoWrapper}>
            <img alt={"Logo"} src={logo} />
          </div>
        </header>
        <LogInForm />
      </div>
      <div className={s.registrationBarWrapper}>
        <span>Don't have an account yet?</span>
        <Link to={ROUTE_PATHS.SignUp}>Sign up</Link>
      </div>
      <BarInstallApps />
    </div>
  );
};
