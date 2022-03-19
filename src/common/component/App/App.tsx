import React from "react";
import s from "./App.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { PostsContainer } from "../../../features/post/components/PostsContainer/PostsContainer";

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <div className={s.appWrapperContent}>
        <PostsContainer />
      </div>
    </div>
  );
}

export default App;
