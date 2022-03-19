import { faker } from "@faker-js/faker";

export interface IPost {
  id: string;
  userName: string;
  userAvatar: string;
  images: string;
  views: number;
  description: string;
  datePublication: Date;
}

export type IPostApi = IPost[];

const createPost = () => ({
  id: faker.datatype.uuid(),
  userName: faker.name.findName(),
  userAvatar: `https://picsum.photos/800/800?random=${faker.datatype.number(
    50
  )}`,
  images: `https://picsum.photos/800/800?random=${faker.datatype.number(50)}`,
  views: faker.datatype.number(10000),
  description: faker.lorem.sentence(5),
  datePublication: faker.date.between("2018", "2022"),
});

export const postsResult: IPostApi = Array.from({ length: 50 }, createPost);
