import React from "react";
import s from "./BarInstallApps.module.scss";

export const BarInstallApps: React.FC = () => {
  return (
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
  );
};
