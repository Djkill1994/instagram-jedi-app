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
    return res(ctx.status(isUserExist ? 200 : 500));
  }),
  rest.post(`${BACKEND_URL}/signUp`, (req, res, ctx) => {
    const { email, password, fullName, userName } = req.body;
    const newUser = {
      userName,
      email,
      password,
      fullName,
    };
    const pushUser = usersResult.push(newUser);
    return res(ctx.json(pushUser));
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
