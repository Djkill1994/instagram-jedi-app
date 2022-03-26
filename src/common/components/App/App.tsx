import React from "react";
import s from "./App.module.scss";

import { Registration } from "../Registration";

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <div className={s.allPageWrapper}>
        <Registration />
      </div>

    </div>
  );
};
