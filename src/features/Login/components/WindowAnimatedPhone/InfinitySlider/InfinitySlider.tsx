import React, { useEffect, useState } from "react";
import s from "./InfinitySlider.module.scss";
import img1 from "../../../../../assets/image/dynamicImages/img1.png";
import img2 from "../../../../../assets/image/dynamicImages/img2.png";
import img3 from "../../../../../assets/image/dynamicImages/img3.png";
import img4 from "../../../../../assets/image/dynamicImages/img4.png";
import clsx from "clsx";

const images = [img1, img2, img3, img4];

export const InfinitySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliderStarted, setIsSliderStarted] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
      setIsSliderStarted(true);
    }, 4000);
    return () => clearInterval();
  }, []);

  return (
    <div className={s.slider}>
      {images.map((image, index) => (
        <img
          key={index}
          alt={"images"}
          src={images[index]}
          className={clsx(s.img, {
            [s.activeImg]: index === activeIndex,
            [s.imageOut]:
              (isSliderStarted &&
                index ===
                  (activeIndex - 1 === images.length - 1
                    ? 0
                    : activeIndex - 1)) ||
              index ===
                (activeIndex - 1 === images.length - 2 ? 0 : images.length - 1),
          })}
        />
      ))}
    </div>
  );
};
