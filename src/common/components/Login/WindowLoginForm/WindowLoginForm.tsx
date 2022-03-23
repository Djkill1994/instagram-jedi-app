import React, { useState } from "react";
import s from "./WindowLoginForm.module.scss";
import logo from "../../../../assets/icon/1b47f9d0e595.png";
import { LoadingButton } from "@mui/lab";

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
              style={{
                width: "254px",
                height: "28px",
              }}
              className={s.LoadingButton}
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
      <div className={s.installAppsWrapper}>
        <span>Get the app.</span>
        <div className={s.barInstallApps}>
          <div className={s.installAppStore}>
            <img
              alt={"AppStore"}
              src={
                "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              }
            />
          </div>
          <div className={s.installGooglePlay}>
            <img
              alt={"GooglePlay"}
              src={
                "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
