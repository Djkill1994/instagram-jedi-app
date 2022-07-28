export interface activeChatUsers {
  activeUserId: number | string;
  userName: string;
  userAvatar: string;
  roomId: number | string;
}

export type IActiveChatUsersApi = activeChatUsers[];

export const activeChatUsersResult: IActiveChatUsersApi = [];
