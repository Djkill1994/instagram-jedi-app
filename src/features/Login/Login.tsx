import React from "react";
import s from "./Login.module.scss";
import { WindowAnimatedPhone } from "./WindowAnimatedPhone";
import { WindowLoginForm } from "./WindowLoginForm";
import { Footer } from "../../common/components/Footer";

export const Login: React.FC = () => {
  console.log("Login Load");
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
