import React from "react";
import { Registration } from "features/Registration/components/Registration";
import { Navigate, Route, Routes } from "react-router-dom";
import { Stack } from "@mui/material";
import { RequireAuth } from "../RequireAuth";
import { PostsContainer } from "features/Post/components/PostsContainer";
import { ContentWrapper } from "../ContentWrapper";
import { Login } from "features/Login/components/Login";
import { Messages } from "features/Messages/components/Messages";

export const ROUTE_PATHS = {
  Login: "/",
  SignUp: "signUp",
  Content: "content",
  Messages: "messages",
  FbLogin: "",
  RecPassword: "",
};

export const App: React.FC = () => {
  return (
    <Stack flexDirection="column">
      <Routes>
        <Route path={ROUTE_PATHS.Login} element={<Login />} />
        <Route path={ROUTE_PATHS.SignUp} element={<Registration />} />
        <Route
          path={ROUTE_PATHS.Content}
          element={
            <RequireAuth>
              <ContentWrapper children={<PostsContainer />} />
            </RequireAuth>
          }
        />
        <Route
          path={ROUTE_PATHS.Messages}
          element={
            <RequireAuth>
              <ContentWrapper children={<Messages />} />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Stack>
  );
};
