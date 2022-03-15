import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "../features/post/postSlise";



export const store = configureStore({
    reducer: {
        // @ts-ignore
        post: postSlice
    }
})