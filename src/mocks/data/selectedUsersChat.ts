import { faker } from "@faker-js/faker";

export interface activeChatUsers {
  id: number | string;
  roomId: number | string;
}

export type IActiveChatUsersApi = activeChatUsers[];

export const activeChatUsersResult = [];
