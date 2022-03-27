import React from "react";
import s from "./BarInstallApps.module.scss";
import { Link } from "@mui/material";

export const BarInstallApps: React.FC = () => {
  return (
    <div className={s.installAppsWrapper}>
      <span>Get the app.</span>
      <div className={s.barInstallApps}>
        <Link
          target="_blank"
          className={s.installAppStore}
          href={"https://apps.apple.com/app/instagram/id389801252?vt=lo"}
        >
          <img
            alt={"AppStore"}
            src={
              "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            }
          />
        </Link>
        <Link
          className={s.installGooglePlay}
          target="_blank"
          href={
            "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=6F8FE621-2D27-49E1-8F4A-68D804A778EE&utm_content=lo&utm_medium=badge"
          }
        >
          <img
            alt={"GooglePlay"}
            src={
              "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            }
          />
        </Link>
      </div>
    </div>
  );
};
