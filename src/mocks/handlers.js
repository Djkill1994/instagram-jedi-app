import { rest } from "msw";
import { postsResult } from "./data/posts";
import { BACKEND_URL } from "../config";
import { usersResult } from "./data/users";

export const handlers = [
  rest.get(`${BACKEND_URL}/posts`, (req, res, ctx) => {
    return res(ctx.json(postsResult));
  }),
  rest.post(`${BACKEND_URL}/login`, (req, res, ctx) => {
    const { email, password } = req.body;
    const isUserExist = usersResult.some(
      (user) => user.email === email && user.password === password
    );
    const authUser = isUserExist ? 200 : 500;
    const authResult = authUser
      ? usersResult.map((user) => {
          if (user.email === email) {
            return {
              userName: user.userName,
              userAvatar: user.userAvatar,
              userId: user.id,
            };
          }
        })
      : null;
    return res(ctx.status(authUser), ctx.json(authResult));
  }),
  rest.put(`${BACKEND_URL}/signUp`, (req, res, ctx) => {
    usersResult.push(req.body);
    return res(ctx.json(req.body));
  }),
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
