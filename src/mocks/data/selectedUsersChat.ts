export interface activeChatUsers {
  authUser: number | string;
  activeUserChat: number | string;
  roomId: number | string;
}

export type IActiveChatUsersApi = activeChatUsers[];

export const activeChatUsersResult: IActiveChatUsersApi = [];
