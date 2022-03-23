import React from "react";
import s from "./Login.module.scss";
import { WindowAnimatedPhone } from "./WindowAnimatedPhone";
import { WindowLoginForm } from "./WindowLoginForm";
import { Footer } from "./Footer";

export const Login: React.FC = () => {
  return (
    <div className={s.wrapperPage}>
      <div className={s.wrapperWindow}>
        <WindowAnimatedPhone />
        <WindowLoginForm />
      </div>
      <Footer />
    </div>
  );
};
