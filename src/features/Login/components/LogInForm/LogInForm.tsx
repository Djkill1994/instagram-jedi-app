import React from "react";
import s from "./LogInForm.module.scss";
import { DecorationBorder } from "../../../../common/components/DecorationBorder";
import { Link } from "react-router-dom";
import { CustomForm } from "./CustomForm";
import { Stack } from "@mui/material";
import { ROUTE_PATHS } from "../../../../common/components/App/App";

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
          className={s.loginFbButton}
        >
          <Link to={ROUTE_PATHS.FbLogin}>Log in with facebook</Link>
          <img
            alt={"FB"}
            src={"https://www.facebook.com/images/fb_icon_325x325.png"}
          />
        </Stack>
        <div className={s.errorWindow}>Error</div>
        <Link to={ROUTE_PATHS.RecPassword} className={s.forgotPasswordBtn}>
          Forgot password?
        </Link>
      </Stack>
    </Stack>
  );
};
