export interface IUser {
  id: string;
  email: string;
  userName: string;
  userAvatar: string;
  password: string;
}

export type IUsersApi = IUser[];

export const usersResult: IUsersApi = [
  {
    id: "1",
    email: "test1@gmail.com",
    userName: "Vlad",
    userAvatar: "https://bmwdrug.ru/img/logotip-v-vektore-bmv_0.jpg",
    password: "1",
  },
  {
    id: "2",
    email: "test2@gmail.com",
    userName: "David",
    userAvatar:
      "https://www.meme-arsenal.com/memes/5527558dcdb2c5c7c441b2f4a9fa2007.jpg",
    password: "1",
  },
  {
    id: "3",
    email: "test3@gmail.com",
    userName: "Geralt",
    userAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4-coM_BOdl6o5AXdvW40eN4h-kwnD__qSg&usqp=CAU",
    password: "1",
  },
  {
    id: "4",
    email: "test4@gmail.com",
    userName: "Lola Taylor",
    userAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsWsVZxGbA0tDghaC-JhA1Kk7_QUvWUSv8g&usqp=CAU",
    password: "1",
  },
  {
    id: "5",
    email: "test5@gmail.com",
    userName: "Tirion",
    userAvatar:
      "https://cdnn1.inosmi.ru/img/24507/51/245075194_0:0:0:0_1240x0_80_0_0_f9d2c3157d7c82d2f07397c5d65e94d1.jpg",
    password: "1",
  },
  {
    id: "6",
    email: "test6@gmail.com",
    userName: "Kirill",
    userAvatar:
      "https://img.gazeta.ru/files3/612/12851612/fut-pic905-895x505-72138.jpg",
    password: "1",
  },
];
