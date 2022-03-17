import { rest } from "msw";
import {postsResult} from "./data/posts";
import {BACKEND_URL} from "../config";

export const handlers = [
    rest.get(`${BACKEND_URL}/posts`, (req, res, ctx) => {
        return res(ctx.json(postsResult));
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
