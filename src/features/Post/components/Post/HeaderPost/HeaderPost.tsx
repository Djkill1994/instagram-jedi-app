import s from "./HeaderPost.module.scss";
import React from "react";

interface HeaderPostProps {
  userAvatar: string;
  userName: string;
}

export const HeaderPost: React.FC<HeaderPostProps> = ({
  userAvatar,
  userName,
}) => {
  return (
    <div className={s.headerBar}>
      <header className={s.header}>
        <div className={s.avatarWrapper}>
          <img alt="Avatar" src={userAvatar} />
        </div>
        <span className={s.nameAccount}>{userName}</span>
      </header>
      <div className={s.moreFunc}>
        <svg
          aria-label="Дополнительно"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="6" cy="12" r="1.5" />
          <circle cx="18" cy="12" r="1.5" />
        </svg>
      </div>
    </div>
  );
};
