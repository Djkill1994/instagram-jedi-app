import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    data: {
        userName: 'Vlad' as string,
        userAvatar: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829' as string,
        content: {
            images: 'https://kitweb.pro/wp-content/uploads/2021/09/react.jpg' as string,
            video: '' as string
        },
        views: 26543 as number,
        description: 'React.js it`s a cool library in java script' as string,
        datePublication: '1 hours later' as string,
    }
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPost: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {getPost} = postSlice.actions
export default postSlice.reducer