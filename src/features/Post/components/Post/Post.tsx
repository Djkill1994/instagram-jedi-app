import React from "react";
import s from "./Post.module.scss";
import { IPost } from "../../../../mocks/data/posts";
import { HeaderPost } from "./HeaderPost";
import { ContentPost } from "./ContentPost";
import { SocialSectionPost } from "./SocialSectionPost";
import { CommentsPost } from "./CommentsPost";

export interface PostItemProps {
  post: IPost;
}

export const Post: React.FC<PostItemProps> = ({ post }) => (
  <div className={s.wrapperContain}>
    <HeaderPost userName={post.userName} userAvatar={post.userAvatar} />
    <ContentPost images={post.images} />
    <SocialSectionPost
      userName={post.userName}
      views={post.views}
      datePublication={post.datePublication}
      description={post.description}
    />
    <CommentsPost />
  </div>
);