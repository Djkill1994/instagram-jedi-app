import React from "react";
import s from "./DecorationBorder.module.scss";

export const DecorationBorder: React.FC = () => {
  return (
    <div className={s.decorationBorderWrapper}>
      <div className={s.one} />
      <div className={s.text}>OR</div>
      <div className={s.two} />
    </div>
  );
};
