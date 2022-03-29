import s from "./SocialSectionPost.module.scss";
import React from "react";
import { SocialSectionBar } from "../SocialSectionBar";

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
    <div className={s.socialSectionWrapper}>
      <SocialSectionBar />
      <div className={s.views}>
        <span>{views}: Views</span>
      </div>
      <div className={s.infoBlock}>
        <span className={s.author}>{userName}</span>
        <span className={s.description}>{description}</span>
      </div>
      <div className={s.comments}>View all comments</div>
      <div className={s.publicationDate}>
        <span>{datePublication}</span>
      </div>
    </div>
  );
};
