import { reqTypes } from '../../types';
import { Api } from '../../../constants';

export const startRequest = () => {
    return {
        type: reqTypes.START_REQUEST
    };
};

export const successRequest = (msg) => {
    return {
        type: reqTypes.SUCCESS_REQUEST,
        payload: {
            msg
        }
    }
}

export const failRequest = (errors) => {
    return {
        type: reqTypes.FAIL_REQUEST,
        payload: {
            errors
        }
    }
}

export const fetchStart = () => {
    return {
        type: reqTypes.FETCH_START
    }
}

export const successFetch = (requests) => {
    return {
        type: reqTypes.SUCCESS_FETCH,
        payload: {
            requests
        }
    }
}

export const fetchErrors = (errors) => {
    return {
        type: reqTypes.ERROR_FETCH,
        payload: {
            errors
        }
    }
}
export const postRequest = (data) => dispatch => {
    dispatch(startRequest());
    const token = localStorage.getItem('token');
    axios.post(Api.MAKE_SERVICE_REQUEST, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        sessionStorage.setItem('request_id', res.data.id)
        dispatch(successRequest(res.data.message))
    })
    .catch((err) => {
        dispatch(failRequest(err.response.data))
    })
}

export const getReqests = () => dispatch => {
    dispatch(fetchStart())
    axios.get(Api.ALL_REQUESTS)
        .then((res) => {
            dispatch(successFetch(res.data))
        })
        .catch((err) => {
            dispatch(fetchErrors(err))
        })
}

export const getCateRequests = (id) => dispatch => {
    dispatch(fetchStart())
    axios.get(`${Api.CATEGORY_REQUESTS}/${id}`)
        .then((res) => {
            dispatch(successFetch(res.data))
        })
        .catch((err) => {
            dispatch(fetchErrors(err))
        })
}