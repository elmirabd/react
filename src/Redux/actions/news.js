import axios from 'axios';
import { GET_NEWS } from '../types';

// action
export const postNews = (data) => (dispatch) => {
    return axios.post(`/api/add-article`, {data}).then(res => {
        dispatch(getNewsDispatch(res.data.articles))
    })
};

export const getNews = () => (dispatch) => {
    return axios.get(`/api/get-articles`).then(res => {
        dispatch(getNewsDispatch(res.data.articles))
    })
};

//action dispatch
export const  getNewsDispatch = (news) => ({
    type: GET_NEWS,
    news
});