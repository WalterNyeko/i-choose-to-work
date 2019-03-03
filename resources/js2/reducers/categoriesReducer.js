import {categoriesActionTypes} from '../actionTypes'

const initialState = {
    items: [],
    loading: false,
    errors: [],
}

export default function(state = initialState, action){
    switch (action.type) {
        case categoriesActionTypes.REQUEST_CATEGORIES:
            return{
                ...state,
                loading: true
            }
        case categoriesActionTypes.FETCH_CATEGORIES:
            return{
                ...state,
                loading: false,
                items: action.payload
            }
        case categoriesActionTypes.ERROR_CATEGORIES:
            return{
                ...state,
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}