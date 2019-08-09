import axios from 'axios';
import { GET_ALL_POSTS } from '../types';

// action
export const getPosts = () => (dispatch) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        dispatch(getPostsDispatch(res.data))
    })
};

//action dispatch
export const  getPostsDispatch = (posts) => ({
    type: GET_ALL_POSTS,
    posts
});