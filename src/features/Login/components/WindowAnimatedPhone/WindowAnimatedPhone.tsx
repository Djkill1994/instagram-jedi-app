import React from "react";
import styles from "./WindowAnimatedPhone.module.scss";
import { InfinitySlider } from "./InfinitySlider";
import { Stack } from "@mui/material";

export const WindowAnimatedPhone: React.FC = () => {
  return (
    <Stack className={styles.phoneImages}>
      <img
        alt={"Phone"}
        src={
          "https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
        }
        className={styles.images}
      />
      <div className={styles.dynamicImg}>
        <InfinitySlider />
      </div>
    </Stack>
  );
};
