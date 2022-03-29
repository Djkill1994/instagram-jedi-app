import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BACKEND_URL} from "../../../config";
import {IPostApi} from "../../../mocks/data/posts";


export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: BACKEND_URL}),
        endpoints: (build) => ({
            getPosts: build.query<IPostApi, void>({
                query: () => ({
                    url: `/posts`,
                })
            }),
        })
})

export const {useGetPostsQuery} = postsApi


