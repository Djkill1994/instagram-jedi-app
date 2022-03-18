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

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const postsResult: IPostApi = [
    {
        id: 1,
        userName: 'Vlad',
        userAvatar: `https://picsum.photos/800/800?random=${getRandomInt(50)}`,
        images: `https://picsum.photos/800/800?random=${getRandomInt(50)}` ,
        views: getRandomInt(10000),
        description: '',
        datePublication: '1 hours later',
    },
    {
        id: 2,
        userName: 'AdamSendler',
        userAvatar: `https://picsum.photos/800/800?random=${getRandomInt(50)}`,
        images: `https://picsum.photos/800/800?random=${getRandomInt(50)}`,
        views: getRandomInt(10000),
        description: 'Disco Disco !!!!',
        datePublication: '17 hours later',
    },
]