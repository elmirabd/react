import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import news from './news';

export const rootReducer = combineReducers({
    users,
    posts,
    news
});