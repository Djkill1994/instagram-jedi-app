import React from "react";
import s from "./App.module.scss";
import { Login } from "../../../features/Login/components";
import { Registration } from "../../../features/Registration/components";
import { Routes, Route } from "react-router-dom";
import { ContentWrapper } from "../ContentWrapper";
import { PostsContainer } from "../../../features/Post/components/PostsContainer";

export const ROUTE_PATHS = {
  Login: "/",
  SignUp: "signUp",
  Content: "content",
  FbLogin: "",
  RecPassword: "",
};

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route path={ROUTE_PATHS.Login} element={<Login />} />
        <Route path={ROUTE_PATHS.SignUp} element={<Registration />} />
        <Route
          path={ROUTE_PATHS.Content}
          element={<ContentWrapper children={<PostsContainer />} />}
        />
      </Routes>
    </div>
  );
};
