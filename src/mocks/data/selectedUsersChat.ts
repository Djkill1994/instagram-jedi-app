import { IUser } from "./users";

export interface IActiveChatUsers extends Omit<IUser, "password" | "email"> {
  roomId: string;
  userId: string;
}

export type IActiveChatUsersApi = IActiveChatUsers[];

export const activeChatUsersResult: IActiveChatUsersApi = [];
