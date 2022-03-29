import s from "./ContentPost.module.scss";
import React from "react";

interface ContentPostProps {
  images: string;
}

export const ContentPost: React.FC<ContentPostProps> = ({ images }) => {
  return (
    <div className={s.content}>
      <img alt="Content" src={images} />
    </div>
  );
};
