import { serviceActionTypes } from '../actionTypes';

const initialState = {
    items: [],
    moreItems: [],
    loading: false,
    errors: [],
    currentPage: '',
    lastPage: '',
}

export default function(state = initialState, action)
{
    switch (action.type) {
        case serviceActionTypes.FETCH_SERVICES:
            return{
                ...state,
                items: action.payload,
                loading: false
            }
        case serviceActionTypes.ERROR_SERVICES:
            return{
                ...state,
                loading: false,
                errors: action.payload
            }
        case serviceActionTypes.REQUEST_SERVICES:
            return{
                ...state,
                loading: true,
            }
        case serviceActionTypes.LOAD_MORE_SERVICES:
            return{
                ...state,
                loading: false,
                moreItems: action.more,
                currentPage: action.currentPage,
                lastPage: action.lastPage,
            }
        case serviceActionTypes.CAT_SERVICES:
            return{
                ...state,
                loading: false,
                moreItems: action.more,
                currentPage: action.currentPage,
                lastPage: action.lastPage,
            }
        default:
            return state;
    }
}