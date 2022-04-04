import React from "react";
import s from "./SocialSectionBar.module.scss";
import { ReactComponent as Like } from "../../../../../assets/svg/like.svg";
import { ReactComponent as Comments } from "../../../../../assets/svg/comment.svg";
import { ReactComponent as Share } from "../../../../../assets/svg/message.svg";
import { ReactComponent as Bookmarks } from "../../../../../assets/svg/bookmarks.svg";
import { Stack } from "@mui/material";

export const SocialSectionBar = () => {
  return (
    <Stack
      direction="row"
      className={s.socialBar}
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={1}>
        <Like />
        <Comments />
        <Share />
      </Stack>
      <Bookmarks />
    </Stack>
  );
};
