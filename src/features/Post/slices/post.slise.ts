import { createSlice } from "@reduxjs/toolkit";

type contentType = {
  images: string | null;
  video: string | null;
};

export type PostType = {
  id: number | null;
  userName: string | null;
  userAvatar: string | null;
  content: contentType;
  views: number | null;
  description: string | null;
  datePublication: string | null;
};

export const initialState = {
  data: [
    {
      id: 1,
      userName: "Vlad",
      userAvatar:
        "https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829",
      content: {
        images: "https://kitweb.pro/wp-content/uploads/2021/09/react.jpg",
        video: "",
      },
      views: 26543,
      description: "React.js it`s a cool server in java script",
      datePublication: "1 hours later",
    },
    {
      id: 2,
      userName: "AdamSendler",
      userAvatar:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/54013f3e-5c72-4120-b806-55baec0d5609/220x330",
      content: {
        images:
          "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1018454/Ls5ey3oN1wMLKwZh5Dhlg.jpg",
        video: "",
      },
      views: 134,
      description: "Disco Disco !!!!",
      datePublication: "17 hours later",
    },
  ] as Array<PostType>,
};

export type InitialStateType = typeof initialState;

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getPost } = postSlice.actions;
export default postSlice.reducer;
