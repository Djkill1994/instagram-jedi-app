import * as React from "react";
import Button from "@mui/material/Button";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import s from "./Registration.module.scss";
import iconFb from "../../../assets/icon/facebook-icon.png";
import { DecorationBorder } from "../../../common/components/DecorationBorder";
import { Stack } from "@mui/material";
import { BarInstallApps } from "../../../common/components/BarInstallApps";
import { Footer } from "../../../common/components/Footer";
import { Link } from "react-router-dom";
import { AgreementPolicy } from "./AgreementPolicy";
import { ROUTE_PATHS } from "../../../common/components/App/App";
import { RegistrationCustomForm } from "./RegistrationCustomForm";

export const Registration: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" className={s.wrapperBox}>
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        direction="column"
        className={s.loginWindowForm}
      >
        <img alt={"Logo"} src={logo} />
        <h2 className={s.titleSignUp}>
          Sign up to see photos and videos from your friends.
        </h2>
        <div className={s.buttonSignInFb}>
          <Button href={"#"}>
            <img alt={"iconFacebook"} src={iconFb} />
            Log in with Facebook
          </Button>
        </div>
        <DecorationBorder />
        <RegistrationCustomForm />
        <AgreementPolicy />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        className={s.signInWrapper}
        justifyContent="center"
        alignItems="center"
      >
        <span>Have an account?</span>
        <Link to={ROUTE_PATHS.Login}>Log in</Link>
      </Stack>
      <BarInstallApps />
      <Footer />
    </Stack>
  );
};
