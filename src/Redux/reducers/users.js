import { USER_REGISTER, USER_ENTER } from '../types';

export default function users(state = {}, action = {}) {

    switch (action.type) {
        case USER_REGISTER: {
            return action.user
        }
        case USER_ENTER: {
            return action.user
        }
        default:
            return state;
    }

}