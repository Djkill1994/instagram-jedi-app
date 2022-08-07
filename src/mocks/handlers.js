import { rest } from "msw";
import { postsResult } from "./data/posts";
import { BACKEND_URL } from "../config";
import { usersResult } from "./data/users";
import { activeChatUsersResult } from "./data/selectedUsersChat";
import { faker } from "@faker-js/faker";

let authUserId;

export const handlers = [
  rest.get(`${BACKEND_URL}/posts`, (req, res, ctx) => {
    return res(ctx.json(postsResult));
  }),
  rest.get(`${BACKEND_URL}/users`, (req, res, ctx) => {
    return res(ctx.json(usersResult.filter((user) => authUserId !== user.id)));
  }),
  rest.get(`${BACKEND_URL}/activeChat`, (req, res, ctx) => {
    return res(ctx.json(activeChatUsersResult));
  }),
  rest.post(`${BACKEND_URL}/login`, (req, res, ctx) => {
    const { email, password } = req.body;
    const user = usersResult.find(
      (user) => user.email === email && user.password === password
    );
    authUserId = user.id;
    return res(ctx.status(user ? 200 : 500), ctx.json(user));
  }),
  rest.put(`${BACKEND_URL}/signUp`, (req, res, ctx) => {
    usersResult.push(req.body);
    return res(ctx.json(req.body));
  }),
  rest.post(`${BACKEND_URL}/activeUser`, (req, res, ctx) => {
    const { id } = req.body;
    const isActiveChatUserExist = activeChatUsersResult.some(
      (user) => user.id === id
    );
    const activeRegisteredUser = usersResult.find((user) => user.id === id);

    if (!isActiveChatUserExist) {
      activeChatUsersResult.push({
        id: activeRegisteredUser.id,
        userName: activeRegisteredUser.userName,
        userAvatar: activeRegisteredUser.userAvatar,
        roomId: faker.datatype.uuid(),
      });
    }
    return res(ctx.json(isActiveChatUserExist ? 500 : 200));
  }),
];
