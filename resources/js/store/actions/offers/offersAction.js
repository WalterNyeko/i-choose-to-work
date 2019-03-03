import { offertypes } from '../../types';
import { Api } from '../../../constants/Api';

export const startPost = () => {
    return {
        type: offertypes.START_POST
    };
};

export const successPost = (msg) => {
    return {
        type: offertypes.SUCCESS_OFFER,
        payload: {
            msg
        }
    }
}

export const errorPost = (errors) => {
    return {
        type: offertypes.ERROR_OFFER,
        payload: {
            errors
        }
    }
}

export const makeOffer = (data) => dispatch => {
    dispatch(startPost())
    const token = localStorage.getItem('token');
    axios.post(Api.OFFER, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        dispatch(successPost('Offer made successfully'))
    })
    .catch((err) => {
        dispatch(errorPost(err.response.data))
    })
}