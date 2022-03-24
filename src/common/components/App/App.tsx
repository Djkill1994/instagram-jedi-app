import React from "react";
import s from "./App.module.scss";
import { Navbar } from "../Navbar";
import { Header } from "../Header";
import { PostsContainer } from "../../../features/post/components/PostsContainer";
import { Login } from "../Login";
import { Registration } from "../Registration";

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <div className={s.allPageWrapper}>
        {/*<Login />*/}
        <Registration />
      </div>
      {/*<div className={s.appBody}>*/}
      {/*  <Header />*/}
      {/*  <Navbar />*/}
      {/*  <div className={s.appWrapperContent}>*/}
      {/*    <PostsContainer />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
