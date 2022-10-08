import React from "react";
import styles from "./Post.module.scss";
import { IPost } from "mocks/data/posts";
import { HeaderPost } from "./HeaderPost";
import { ContentPost } from "./ContentPost";
import { SocialSectionPost } from "./SocialSectionPost";
import { CommentsPost } from "./CommentsPost";
import { Box, Stack } from "@mui/material";

export interface PostItemProps {
  post: IPost;
}

export const Post: React.FC<PostItemProps> = ({ post }) => {
  return (
    <Stack flexDirection="column" className={styles.wrapperContain}>
      <HeaderPost userName={post.userName} userAvatar={post.userAvatar} />
      <ContentPost images={post.images} />
      <Box border="1px solid #dbdbdb">
        <SocialSectionPost
          userName={post.userName}
          views={post.views}
          datePublication={post.datePublication}
          description={post.description}
        />
        <CommentsPost />
      </Box>
    </Stack>
  );
};
