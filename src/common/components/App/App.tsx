import React from "react";
import s from "./App.module.scss";
import { Navbar } from "../Navbar";
import { Header } from "../Header";
import { PostsContainer } from "../../../features/post/components/PostsContainer";
import { Login } from "../Login";
import { Registration } from "../Registration";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <div className={s.appBody}>
      <Header />
      <Navbar />
      <div className={s.appWrapperContent}>
        <PostsContainer />
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Registration />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
};
