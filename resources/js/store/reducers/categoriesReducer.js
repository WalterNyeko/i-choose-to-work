import { categoriesTypes } from '../types';

const INITIAL_STATE = {
    loading: false,
    cats: [],
    errors: [],
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case categoriesTypes.REQUEST_CATEGORIES:
            return {
                ...state,
                loading: true
            };
        case categoriesTypes.SUCCESS_CATEGORIES:
            return {
                ...state,
                loading: false,
                cats: action.payload.categories
            }
        case categoriesTypes.FAIL_CATEGORIES:
            return {
                ...state,
                loading: false,
                cats: action.payload.errors
            }
        default: return state;
    }
};