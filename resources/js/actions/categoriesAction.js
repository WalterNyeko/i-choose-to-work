import { categoriesActionTypes } from '../actionTypes'


export const requestCats = () => {
    return {
        type: categoriesActionTypes.REQUEST_CATEGORIES
    };
};


export const successCats  = (categories) => {
    return {
        payload: categories,
        type: categoriesActionTypes.FETCH_CATEGORIES
    };
};


export const errorCats = (errors) => {
    return {
        payload: errors,
        type: categoriesActionTypes.ERROR_CATEGORIES
    };
};

//api request to get categories
export const getCategores  = () => dispatch => {
    dispatch(requestCats());
    axios.get('/api/categories')
        .then((res) => {
            dispatch(successCats(res.data))
        }) 
        .catch((err) => {
            const errors = err.response.data;
            dispatch(errorCats(errors))
        })
};