export interface IPost {
    id: number;
    userName: string;
    userAvatar: string;
    images: string;
    views: number;
    description: string;
    datePublication: string;
}

export type IPostApi = IPost[];

export const postsResult: IPostApi = [
    {
        id: 1,
        userName: 'Vlad',
        userAvatar: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
        images: 'https://kitweb.pro/wp-content/uploads/2021/09/react.jpg',
        views: 26543,
        description: 'React.js it`s a cool library in java script',
        datePublication: '1 hours later',
    },
    {
        id: 2,
        userName: 'AdamSendler',
        userAvatar: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/54013f3e-5c72-4120-b806-55baec0d5609/220x330',
        images: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1018454/Ls5ey3oN1wMLKwZh5Dhlg.jpg',
        views: 134,
        description: 'Disco Disco !!!!',
        datePublication: '17 hours later',
    },
]