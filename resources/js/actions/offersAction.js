import { offersTypes } from '../actionTypes';

export const requestOffers = () => {
    return {
        type: offersTypes.REQUEST_OFFERS
    };
};

export const successOffers = (offers) => {
    return {
        type: offersTypes.OFFERS_SUCCESS,
        payload: offers
    }
}

export const offersError = (errors) => {
    return {
        type: offersTypes.OFFERS_ERROR,
        payload: errors
    }
}

export const getOffers = () => dispatch => {
    dispatch(requestOffers());
    const token = localStorage.getItem('token');
    axios.get('/api/my-offers', {
        headers: {
            Authorization: Bearer + token
        }
    })
    .then((res) => {
        dispatch(successOffers(res.data))
    })
    .catch((err) => {
        dispatch(offersError(err.response.data))
    })
}