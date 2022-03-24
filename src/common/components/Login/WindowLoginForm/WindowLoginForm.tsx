import React, { useState } from "react";
import s from "./WindowLoginForm.module.scss";
import logo from "../../../../assets/icon/1b47f9d0e595.png";
import { LoadingButton } from "@mui/lab";
import { BarInstallApps } from "../../BarInstallApps";

export const WindowLoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className={s.loginFormWrapper}>
      <div className={s.windowLogin}>
        <header className={s.headerLogin}>
          <div className={s.logoWrapper}>
            <img alt={"Logo"} src={logo} />
          </div>
        </header>
        <div className={s.wrapperLoginForm}>
          <div className={s.emailInputWrapper}>
            <input placeholder={"Phone, user name or email"} />
          </div>
          <div className={s.passwordInputWrapper}>
            <input placeholder={"Password"} />
          </div>
          <div className={s.sendBtnWrapper}>
            <LoadingButton
              className={s.loadingButton}
              disabled={true}
              onClick={handleClick}
              loading={loading}
              loadingPosition="center"
              variant="contained"
            >
              Log in
            </LoadingButton>
          </div>
          <div className={s.decorationBorderWrapper}>
            <div className={s.one} />
            <div className={s.text}>OR</div>
            <div className={s.two} />
          </div>
          <div className={s.loginOnFacebookWrapper}>
            <button className={s.loginFbButton}>
              <img
                alt={"FB"}
                src={"https://www.facebook.com/images/fb_icon_325x325.png"}
              />
              Log in with facebook
            </button>
          </div>
          <div className={s.errorWindow}>ERROR</div>
          <div className={s.forgotYourPasswordWrapper}>
            <button className={s.forgotPasswordBtn}>
              Forgot your password?
            </button>
          </div>
        </div>
      </div>
      <div className={s.registrationBarWrapper}>
        <span>Don't have an account yet?</span>
        <button>Sign up</button>
      </div>
      <BarInstallApps />
    </div>
  );
};
