import React, { useState } from "react";
import s from "./InfinitySlider.module.scss";
import img1 from "../../../../assets/image/dynamicImg/img1.png";
import img2 from "../../../../assets/image/dynamicImg/img2.png";
import img3 from "../../../../assets/image/dynamicImg/img3.png";
import img4 from "../../../../assets/image/dynamicImg/img4.png";
import { config, useTransition, animated } from "react-spring";

// export const InfinitySlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//
//   useEffect(() => {
//     setInterval(() => {
//       setActiveIndex((current) => {
//         return current === images.length - 1 ? 0 : current + 1;
//       });
//     }, 4000);
//     return () => clearInterval();
//   }, []);
//
//   const prevImgIndex = activeIndex ? activeIndex - 1 : images.length - 1;
//
//   return (
//     <div className={s.slider}>
//       {images.map((image, index) => (
//         <img
//           key={index}
//           alt={"images"}
//           src={images[prevImgIndex]}
//           className={clsx(
//             {
//               [s.activeImg]: index === prevImgIndex + 1,
//               [s.imageOut]: index === prevImgIndex - 1,
//             },
//             s.img
//           )}
//         />
//       ))}
//     </div>
//   );
// };

export function InfinitySlider() {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 1000,
    config: config.molasses,
    onRest: () => set(!toggle),
  });
  return transitions(
    ({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            position: "absolute",
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          }}
        >
          <img alt={"images"} src={img2} className={s.img} />
        </animated.div>
      ) : (
        <animated.div
          style={{
            position: "absolute",
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          }}
        >
          <img alt={"images"} src={img1} className={s.img} />
        </animated.div>
      )
    //  (
    //   <animated.div
    //     style={{
    //       position: "absolute",
    //       opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
    //     }}
    //   >
    //     <img alt={"images"} src={img3} className={s.img} />
    //   </animated.div>
    // ) : (
    //   <animated.div
    //     style={{
    //       position: "absolute",
    //       opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
    //     }}
    //   >
    //     <img alt={"images"} src={img4} className={s.img} />
    //   </animated.div>
    // )
  );
}
