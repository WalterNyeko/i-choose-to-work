import { combineReducers } from 'redux';
import postReducer from './postReducer';
import servicesReducer from './servicesReducer';
import categoriesReducer from './categoriesReducer';
import authReducer from './authReducer';
import questionReducer from './questionReducer';

export default combineReducers({
    posts: postReducer,
    services: servicesReducer,
    serviceCategories: categoriesReducer,
    auth: authReducer,
    questions: questionReducer,
})
