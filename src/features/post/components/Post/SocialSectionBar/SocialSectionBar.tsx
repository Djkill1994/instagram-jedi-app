import React from "react";
import s from "./SocialSectionBar.module.scss";
import { ReactComponent as Like } from "../../../../../assets/svg/like.svg";
import { ReactComponent as Comments } from "../../../../../assets/svg/comment.svg";
import { ReactComponent as Share } from "../../../../../assets/svg/message.svg";
import { ReactComponent as Bookmarks } from "../../../../../assets/svg/bookmarks.svg";

export const SocialSectionBar = () => {
  return (
    <div className={s.socialSection}>
      <div className={s.socialBar}>
        <div className={s.like}>
          <Like />
        </div>
        <div className={s.comment}>
          <Comments />
        </div>
        <div className={s.share}>
          <Share />
        </div>
      </div>
      <div className={s.bookmarks}>
        <Bookmarks />
      </div>
    </div>
  );
};
