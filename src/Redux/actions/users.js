import axios from 'axios';
import { GET_ALL_USERS, DELETE_USER } from '../types';

// action
export const getUsers = (id) => (dispatch) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      dispatch(getUsersDispatch(res.data))
    })
};

//action dispatch
export const  getUsersDispatch = (users) => ({
    type: GET_ALL_USERS,
    users: users
});