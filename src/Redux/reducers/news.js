import { GET_NEWS } from '../types';

export default function news(state = [], action = {}) {

    switch (action.type) {
        case GET_NEWS: {
            return action.news
        }
        default:
            return state;
    }

}