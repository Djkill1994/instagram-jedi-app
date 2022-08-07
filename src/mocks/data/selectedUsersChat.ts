import { IUser } from "./users";

export interface IActiveChatUsers extends Omit<IUser, "password" | "email"> {
  roomId: string;
}

export type IActiveChatUsersApi = IActiveChatUsers[];

export const activeChatUsersResult: IActiveChatUsersApi = [];
