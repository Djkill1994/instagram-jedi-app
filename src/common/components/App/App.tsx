import React from "react";
import s from "./App.module.scss";
import { Navbar } from "../Navbar";
import { Header } from "../Header";
import { PostsContainer } from "../../../features/post/components/PostsContainer";

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <div className={s.appWrapperContent}>
        <PostsContainer />
      </div>
    </div>
  );
};
