import { savingServiceTypes } from '../../types';
import { Api } from '../../../constants';
import { authHeader } from '../../../helpers/authHeader';


export const sendRequest = () => {
    return {
        type: savingServiceTypes.SEND_REQUEST
    };
};

export const requestSuccess = (message) => {
    return {
        type: savingServiceTypes.REQUEST_SUCCESS,
        payload: {
            message
        }
    }
}

export const requestFail = (errors) => {
    return {
        type: savingServiceTypes.REQUEST_FAIL,
        payload: {
            errors
        }
    }
}

export const saveService = (data) => dispatch => {
    dispatch(sendRequest())
    const token = localStorage.getItem('token');
    axios.post(Api.SAVE_SERVICE, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            dispatch(requestSuccess('Service added successfully, Awaiting verification from team'));
        })
        .catch((err) => {
            dispatch(requestFail(err.response.data))
        })
}