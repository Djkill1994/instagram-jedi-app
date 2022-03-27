import s from "./ContentWrapper.module.scss";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { PostsContainer } from "../../../features/post/components/PostsContainer";
import React from "react";

export const ContentWrapper: React.FC = () => {
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