import { combineReducers } from 'redux';
import authReducer from './authReducer';
import servicesReducer from './servicesReducer';
import savingServiceReducer from './savingServiceReducer'
import categoriesReducer from './categoriesReducer'
import questionReducer from './questionReducer'
import reqReducer from './reqReducer'
import providersReducer from './providersReducer'
import offerReducer from './offerReducer'
import bidReducer from './bidReducer'

export default combineReducers({
    auth: authReducer,
    services: servicesReducer,
    saveService: savingServiceReducer,
    categories: categoriesReducer,
    questions: questionReducer,
    makeRequest: reqReducer,
    providers: providersReducer,
    offer: offerReducer,
    bid: bidReducer
});