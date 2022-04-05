import s from "./SocialSectionPost.module.scss";
import React from "react";
import { SocialSectionBar } from "../SocialSectionBar";
import { Stack, Typography } from "@mui/material";

interface SocialSectionPostProps {
  userName: string;
  views: number;
  description: string;
  datePublication: Date;
}

export const SocialSectionPost: React.FC<SocialSectionPostProps> = ({
  userName,
  datePublication,
  description,
  views,
}) => {
  return (
    <Stack className={s.socialSectionWrapper}>
      <SocialSectionBar />
      <Typography className={s.views} fontWeight="bold" fontSize={14}>
        {views} views
      </Typography>
      <Stack direction="row" spacing={1.5}>
        <Typography fontWeight="bold" fontSize={14}>
          {userName}
        </Typography>
        <Typography fontSize={14}>{description}</Typography>
      </Stack>
      <button className={s.comments}>View all comments</button>
      <Typography fontSize={12} className={s.date}>
        {datePublication}
      </Typography>
    </Stack>
  );
};
