import React from "react";
import styles from "./BarInstallApps.module.scss";
import { Link, Stack, Typography } from "@mui/material";

const APPS = [
  {
    href: "https://apps.apple.com/app/instagram/id389801252?vt=lo",
    alt: "AppStore",
    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=6F8FE621-2D27-49E1-8F4A-68D804A778EE&utm_content=lo&utm_medium=badge",
    alt: "GooglePlay",
    src: "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png",
  },
];

export const BarInstallApps: React.FC = () => {
  return (
    <Stack
      className={styles.installAppsWrapper}
      alignItems="center"
      flexDirection="column"
      width="350px"
      mt="15px"
    >
      <Typography fontSize="14px">Get the app.</Typography>
      <Stack direction="row" spacing={1} mt="15px">
        {APPS.map(({ href, alt, src }) => (
          <Link target="_blank" href={href} key={alt}>
            <img alt={alt} src={src} className={styles.img} />
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};
