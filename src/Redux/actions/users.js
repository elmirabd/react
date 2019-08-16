import axios from 'axios';
import { USER_REGISTER } from '../types';

// action
export const register = (data) => (dispatch) => {
    return axios.post(`/api/register`, { data }).then(res => {
      localStorage.user = res.data.user.token;
      dispatch(registerDispatch(res.data.user))
    })
};

export const enter = (data) => (dispatch) => {
    return axios.post(`/api/enter`, { data }).then(res => {
      localStorage.user = res.data.user.token;
      dispatch(registerDispatch(res.data.user))
    })
};

//action dispatch
export const  registerDispatch = (user) => ({
    type: USER_REGISTER,
    user
});