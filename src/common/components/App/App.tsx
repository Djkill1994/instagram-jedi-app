import React from "react";
import s from "./App.module.scss";
import { Login } from "../Login";

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <div className={s.allPageWrapper}>
        <Login />
      </div>
    </div>
  );
};
