import { reqTypes } from '../types';

const INITIAL_STATE = {
    loading: false,
    message: '',
    errors: [],
    requests: [],
    request: {},
    service: {},
    customer: {},
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case reqTypes.START_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case reqTypes.SUCCESS_REQUEST:
            return {
                ...state,
                loading: false,
                errors: [],
                message: action.payload.msg
            }
        case reqTypes.FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        case reqTypes.START_REQUEST:
            return {
                ...state,
                loading: true
            }
        case reqTypes.SUCCESS_FETCH:
            return {
                ...state,
                loading: false,
                requests: action.payload.requests
            }
        case reqTypes.ERROR_FETCH:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors
            }
        case reqTypes.GET_SINGLE:
            return {
                ...state,
                loading: false,
                customer: action.payload.customer,
                service: action.payload.service,
                request: action.payload.request
            }
        default: return state;
    }
};