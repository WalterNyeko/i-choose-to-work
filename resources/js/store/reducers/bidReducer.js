import { bidTypes } from '../types';

const INITIAL_STATE = {
    loading: false,
    messages: '',
    errors: []
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case bidTypes.REQUEST_START:
            return {
                ...state,
                loading: true
            };
        case bidTypes.REQUEST_FINISH:
            return {
                ...state,
                loading: false,
                messagae: action.payload.msg
            }
        case bidTypes.REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        default: return state;
    }
};