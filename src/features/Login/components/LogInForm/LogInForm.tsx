import React from "react";
import styles from "./LogInForm.module.scss";
import { DecorationBorder } from "../../../../common/components/DecorationBorder";
import { Link } from "react-router-dom";
import { CustomForm } from "./CustomForm";
import { Stack } from "@mui/material";
import { ROUTE_PATHS } from "../../../../common/components/App/App";
import fbLogo from "../../../../assets/icon/FB logo blue.png";

export const LogInForm: React.FC = () => {
  return (
    <Stack spacing={2}>
      <CustomForm />
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <DecorationBorder />
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={1}
          direction="row-reverse"
          className={styles.loginFbButton}
        >
          <Link to={ROUTE_PATHS.FbLogin}>Log in with facebook</Link>
          <img alt={"FB"} src={fbLogo} />
        </Stack>
        <div className={styles.errorWindow}>Error</div>
        <Link to={ROUTE_PATHS.RecPassword} className={styles.forgotPasswordBtn}>
          Forgot password?
        </Link>
      </Stack>
    </Stack>
  );
};
