import { categoriesTypes } from '../../types';
import { Api } from '../../../constants';

export const requestCategories = () => {
    return {
        type: categoriesTypes.REQUEST_CATEGORIES
    };
};

export const successCategories = (categories) => {
    return {
        type: categoriesTypes.SUCCESS_CATEGORIES,
        payload: {
            categories
        }
    }
}

export const failCategories = (errors) => {
    return {
        type: categoriesTypes.FAIL_CATEGORIES,
        payload: {
            errors
        }
    }
}

export const getCategories = () => dispatch => {
    dispatch(requestCategories())
    axios.get(Api.SERVICE_CATEGORIES)
        .then((res) => {
            dispatch(successCategories(res.data))
        })
        .catch((err) => {
            dispatch(failCategories(err))
        })
}