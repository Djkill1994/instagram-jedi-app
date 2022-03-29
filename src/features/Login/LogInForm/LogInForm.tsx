import React from "react";
import s from "./LogInForm.module.scss";
import { DecorationBorder } from "../../../common/components/DecorationBorder";
import { Link } from "react-router-dom";
import { CustomForm } from "./CustomForm";
import { Stack } from "@mui/material";

export const LogInForm: React.FC = () => {
  return (
    <>
      <CustomForm />
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
        className={s.stack}
      >
        <DecorationBorder />
        <Link to="#" className={s.loginFbButton}>
          <img
            alt={"FB"}
            src={"https://www.facebook.com/images/fb_icon_325x325.png"}
          />
          Log in with facebook
        </Link>
        <div className={s.errorWindow}>ERROR</div>
        <Link to="#" className={s.forgotPasswordBtn}>
          Forgot password?
        </Link>
      </Stack>
    </>
  );
};
