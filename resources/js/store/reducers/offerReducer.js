import { offertypes } from '../types';

const INITIAL_STATE = {
    loading: false,
    message: '',
    errors: []
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case offertypes.START_POST:
            return {
                ...state,
                loading: true,
            };
        case offertypes.SUCCESS_OFFER:
            return {
                ...state,
                loading: false,
                message: action.payload.msg
            }
        case offertypes.ERROR_OFFER:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        default: return state;
    }
};