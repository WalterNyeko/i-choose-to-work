import { savingServiceTypes } from '../types';

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
        case savingServiceTypes.SEND_REQUEST:
            return {
                ...state,
                loading: true
            };
        case savingServiceTypes.REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        case savingServiceTypes.REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        default: return state;
    }
};