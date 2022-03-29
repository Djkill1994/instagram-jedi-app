import React from "react";
import s from "./WindowAnimatedPhone.module.scss";
import { InfinitySlider } from "./InfinitySlider";
import { Stack } from "@mui/material";

export const WindowAnimatedPhone: React.FC = () => {
  return (
    <Stack className={s.phoneImages}>
      <img
        alt={"Phone"}
        src={
          "https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
        }
        className={s.images}
      />
      <div className={s.dynamicImg}>
        <InfinitySlider />
      </div>
    </Stack>
  );
};
