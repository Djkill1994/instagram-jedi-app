import React from "react";
import { Login } from "../../../features/Login/components";
import { Registration } from "../../../features/Registration/components";
import { Navigate, Route, Routes } from "react-router-dom";
import { ContentWrapper } from "../ContentWrapper";
import { PostsContainer } from "../../../features/Post/components/PostsContainer";
import { Stack } from "@mui/material";
import { RequireAuth } from "../RequireAuth";
import { Messages } from "../../../features/Messages/components";

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
