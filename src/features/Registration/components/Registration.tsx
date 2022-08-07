import * as React from "react";
import Button from "@mui/material/Button";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import styled from "./Registration.module.scss";
import iconFb from "../../../assets/icon/facebook-icon.png";
import { DecorationBorder } from "../../../common/components/DecorationBorder";
import { Stack, Typography } from "@mui/material";
import { BarInstallApps } from "../../../common/components/BarInstallApps";
import { Footer } from "../../../common/components/Footer";
import { Link } from "react-router-dom";
import { AgreementPolicy } from "./AgreementPolicy";
import { ROUTE_PATHS } from "../../../common/components/App/App";
import { RegistrationCustomForm } from "./RegistrationCustomForm";

export const Registration: React.FC = () => {
  return (
    <Stack spacing={3} alignItems="center" className={styled.wrapperBox}>
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        direction="column"
        className={styled.loginWindowForm}
      >
        <img alt={"Logo"} src={logo} />
        <Typography
          textAlign="center"
          width={266}
          fontSize={16}
          fontWeight="bold"
        >
          Sign up to see photos and videos from your friends.
        </Typography>
        <div className={styled.buttonSignInFb}>
          <Button href={"#"}>
            <img alt={"iconFacebook"} src={iconFb} />
            <Typography fontSize={14}>Log in with Facebook</Typography>
          </Button>
        </div>
        <DecorationBorder />
        <RegistrationCustomForm />
        <AgreementPolicy />
      </Stack>
      <Stack
        spacing={1}
        direction="row"
        className={styled.signInWrapper}
        justifyContent="center"
        alignItems="center"
      >
        <Typography fontSize={14}>Have an account?</Typography>
        <Link to={ROUTE_PATHS.Login}>Log in</Link>
      </Stack>
      <BarInstallApps />
      <Footer />
    </Stack>
  );
};
