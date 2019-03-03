import { serviceTypes } from '../types';

const INITIAL_STATE = {
    loading: false,
    services: [],
    errors: [],
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case serviceTypes.REQUEST_SERVICES:
            return {
                ...state,
                loading: true,
            };
        case serviceTypes.SUCCESS_SERVICES:
            return {
                ...state,
                loading: false,
                services: action.payload.services,
                errors: []
            }
        case serviceTypes.FAIL_SERVICES: 
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        default: return state;
    }
};