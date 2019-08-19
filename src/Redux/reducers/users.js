import { USER_REGISTER } from '../types';

export default function users(state = {}, action = {}) {

    switch (action.type) {
        case USER_REGISTER: {
            return action.user
        }
        default:
            return state;
    }

}