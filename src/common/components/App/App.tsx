import React from "react";
import s from "./App.module.scss";
import { Login } from "../Login";
import { Registration } from "../Registration";
import { Routes, Route } from "react-router-dom";
import { ContentWrapper } from "../ContentWrapper";

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Registration />} />
        <Route path="/content" element={<ContentWrapper />} />
      </Routes>
    </div>
  );
};
