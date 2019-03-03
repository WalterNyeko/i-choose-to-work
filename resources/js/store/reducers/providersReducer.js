import { providersTypes } from '../types';

const INITIAL_STATE = {
    loading: false,
    providers: [],
    errors: []
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case providersTypes.REQUEST_PROVIDERS:
            return {
                ...state,
                loading: true
            };
        case providersTypes.SUCCESS_PROVIDERS:
            return {
                ...state,
                loading: false,
                providers: action.payload.providers
            }
        case providersTypes.FAIL_PROVIDERS:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        default: return state;
    }
};