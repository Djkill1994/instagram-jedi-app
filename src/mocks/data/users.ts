export interface IUsers {
  id: number;
  email: string;
  userName: string;
  userAvatar: string;
  password: string;
}

export type IUsersApi = IUsers[];

const users = [
  {
    id: 1,
    email: "test1@gmail.com",
    userName: "Vlad",
    userAvatar: "https://bmwdrug.ru/img/logotip-v-vektore-bmv_0.jpg",
    password: "123456",
  },
  {
    id: 2,
    email: "test2@gmail.com",
    userName: "David",
    userAvatar:
      "https://www.meme-arsenal.com/memes/5527558dcdb2c5c7c441b2f4a9fa2007.jpg",
    password: "123456",
  },
];

export const usersResult: IUsersApi = users;
