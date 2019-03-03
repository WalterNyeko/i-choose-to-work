import { requestTypes } from '../actionTypes';

const INITIAL_STATE = {
    loading: false,
    items: [],
    errors: [],
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case requestTypes.REQUEST_ALL:
            return {
                ...state,
                loading: true
            };
        case requestTypes.REQUEST_SUCCESS:
            return {
                ...state,
                items: action.payload,
                errors: [],
            }
        case requestTypes.REQUEST_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        default: return state;
    }
};