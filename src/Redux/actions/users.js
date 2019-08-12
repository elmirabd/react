import axios from 'axios';
import { USER_ENTER, USER_REGISTER } from '../types';

// action
export const register = (data) => (dispatch) => {
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