import { bidTypes } from '../../types';
import { Api } from '../../../constants';

export const startRequest = () => {
    return {
        type: bidTypes.REQUEST_START
    };
};

export const finishRequest = (msg) => {
    return {
        type: bidTypes.REQUEST_FINISH,
        payload: {
            msg
        }
    }
}

export const errorRequest = (errors) => {
    return {
        type: bidTypes.REQUEST_FAIL,
        payload: {
            errors
        }
    }
}

export const bidPost = (data) => dispatch => {
    const token = localStorage.getItem('token');
    dispatch(startRequest())
    axios.post(Api.BID, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        dispatch(finishRequest('Request Made Successfully'))
    })
    .catch((err) => {
        dispatch(errorRequest(err.response.data))
    })
}