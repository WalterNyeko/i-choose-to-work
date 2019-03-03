import { questionTypes } from '../types';

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
        case questionTypes.REQUEST_QUSTIONS:
            return {
                ...state,
                loading: true,
                errors: []
            };
        case questionTypes.GET_QUESTIONS:
            return {
                ...state,
                loading: false,
                errors: [],
                items: action.payload.questions
            }
        case questionTypes.REQUEST_FAIL:
            return {
                ...state, 
                loading: false,
                errors: action.payload.errors
            }
        default: return state;
    }
};