import { faker } from "@faker-js/faker";

export interface activeChatUsers {
  id: number;
  roomId: number;
}

export type activeChatUsersApi = activeChatUsers[];

export const activeChatUsersResult = [
  {
    id: 1,
    roomId: faker.datatype.uuid(),
  },
];

