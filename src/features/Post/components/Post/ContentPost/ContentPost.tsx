import React from "react";

interface ContentPostProps {
  images: string;
}

export const ContentPost: React.FC<ContentPostProps> = ({ images }) => {
  return (
    <>
      <img alt="Content" src={images} />
    </>
  );
};
