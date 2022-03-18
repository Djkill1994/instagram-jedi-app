import React from "react"
import { Alert, CircularProgress } from "@mui/material"
import s from "./PostsContainer.module.scss"
import { Post } from "../Post/Post"
import { useGetPostsQuery } from "../../api/post.api"

export const PostsContainer: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery()

  return (
    <div className={s.wrapperContain}>
      {isLoading && <CircularProgress />}
      {error && (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      )}
      {posts && posts.map((posts) => <Post key={posts.id} posts={posts} />)}
    </div>
  )
}
