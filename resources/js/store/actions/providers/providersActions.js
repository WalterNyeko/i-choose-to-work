import { providersTypes } from '../../types';
import { Api } from '../../../constants';

export const requestProviders = () => {
    return {
        type: providersTypes.REQUEST_PROVIDERS
    };
};

export const successProviders = (providers) => {
    return {
        type: providersTypes.SUCCESS_PROVIDERS,
        payload: {
            providers
        }
    }
}

export const failProviders = (errors) => {
    return {
        type: providersTypes.FAIL_PROVIDERS,
        payload: {
            errors
        }
    }
}

export const getProviders = (id) => dispatch => {
    dispatch(requestProviders())
    axios.get(`${Api.SERVICE_PROVIDERS}/${id}`)
        .then((res) => {
            dispatch(successProviders(res.data))
        })
        .catch((err) => {
            dispatch(failProviders(err.data))
        })
}