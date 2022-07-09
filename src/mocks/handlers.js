import { rest } from "msw";
import { postsResult } from "./data/posts";
import { BACKEND_URL } from "../config";
import { usersResult } from "./data/users";
import { activeChatUsersResult } from "./data/selectedUsersChat";
import { faker } from "@faker-js/faker";

export const handlers = [
  rest.get(`${BACKEND_URL}/posts`, (req, res, ctx) => {
    return res(ctx.json(postsResult));
  }),
  rest.get(`${BACKEND_URL}/users`, (req, res, ctx) => {
    return res(ctx.json(usersResult));
  }),
  rest.get(`${BACKEND_URL}/activeChat`, (req, res, ctx) => {
    return res(ctx.json(activeChatUsersResult));
  }),
  rest.post(`${BACKEND_URL}/login`, (req, res, ctx) => {
    const { email, password } = req.body;
    const user = usersResult.find(
      (user) => user.email === email && user.password === password
    );
    return res(ctx.status(user ? 200 : 500), ctx.json(user));
  }),
  rest.put(`${BACKEND_URL}/signUp`, (req, res, ctx) => {
    usersResult.push(req.body);
    return res(ctx.json(req.body));
  }),
  // пользоваель который был выбран как активный добавляется в массив и ему дополнттельно добавляется поле roomId
  rest.post(`${BACKEND_URL}/activeUser`, (req, res, ctx) => {
    const { activeUserId, authUserId } = req.body;
    const activeUser = activeChatUsersResult.includes(activeUserId);
    if (activeUser === true) {
      console.log(activeChatUsersResult);
    } else {
      activeChatUsersResult.concat({
        roomId: faker.datatype.uuid(),
        authUser: authUserId,
        activeUserChat: activeUserId,
      });
    }
    return res(ctx.json(activeChatUsersResult));
  }),
  // rest.get(`${BACKEND_URL}/activeUser`, (req, res, ctx) => {
  //   return res(ctx.json(activeChatUsersResult));
  // }),
  //
  // Examples
  // rest.get(`${import.meta.env.VITE_BACKEND_URL}/brands/:brandId/examples`, (req, res, ctx) => {
  //     return res(ctx.json(examplesResult));
  // }),
  // rest.delete(`${import.meta.env.VITE_BACKEND_URL}/brands/:brandId/examples`, (req, res, ctx) => {
  //     return res(ctx.status(200));
  // }),
  // rest.put(`${import.meta.env.VITE_BACKEND_URL}/brands/:brandId/examples`, (req, res, ctx) => {
  //     return res(ctx.status(200));
  // }),
];
