import { requestTypes } from '../actionTypes';

export const requestAll = () => {
    return {
        type: requestTypes.REQUEST_ALL
    };
};
export const requestSuccess = (myrequests) => {
    return {
        type: requestTypes.REQUEST_SUCCESS,
        payload: myrequests
    };
};
export const requestError = (error) => {
    return {
        type: requestTypes.REQUEST_ERROR,
        payload: error
    };
};

export const getRequests = () => dispatch => {
    dispatch(requestAll());
    const token = localStorage.getItem('token');
    axios.get('/api/my-requests', {
        headers: {
            Authorization: Bearer + token
        }
    })
    .then((res) =>{
        dispatch(requestSuccess(res.data))
    })
    .catch((err) => {
        dispatch(requestError(res.response.data))
    })
}