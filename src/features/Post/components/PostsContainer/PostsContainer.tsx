import React from "react";
import { Alert, CircularProgress, Stack } from "@mui/material";
import { Post } from "../Post";
import { useGetPostsQuery } from "../../api/post.api";

export const PostsContainer: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  return (
    <Stack flexDirection="column" justifyContent="space-around">
      {isLoading && <CircularProgress />}
      {error && (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      )}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </Stack>
  );
};
