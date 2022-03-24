import React from "react";
import s from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={s.wrapperWindow}>
        <div className={s.barOne}>
          <div className={s.sectionOne}>
            <button>Meta</button>
            <button>About</button>
            <button>Blog</button>
            <button>Jobs</button>
            <button>Help</button>
            <button>API</button>
            <button>Privacy</button>
            <button>Terms</button>
            <button>Top Accounts</button>
            <button>Hashtags</button>
            <button>Locations</button>
            <button>Instagram Lite</button>
          </div>
          <div className={s.sectionTwo}>
            <button>Dance</button>
            <button>Food & Drink</button>
            <button>Home & Garden</button>
            <button>Music</button>
            <button>Visual Arts</button>
          </div>
        </div>
        <div className={s.barTwo}>
          <div className={s.selectLeague}>English</div>
          <div>© 2022 Instagram from Meta</div>
        </div>
      </div>
    </footer>
  );
};
