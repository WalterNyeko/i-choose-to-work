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

export const getSingleSucess = (request, customer, service) => {
    return {
        type: reqTypes.GET_SINGLE,
        payload: {
            request,
            customer,
            service
        }
    }
}

//post a service request
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

//get all requests
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

//get requests by service categories
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

//get a single request
export const getSingleRequest = (id) => dispatch => {
    dispatch(startRequest())
    axios.get(`api/services/requests/${id}`)
        .then((res) => {
            dispatch(getSingleSucess(res.data.data, res.data.data.customer, res.data.data.service))
        })
        .catch((errors) => {
            dispatch(fetchErrors(errors))
        })
}

//search requests by location
export const searchServiceLocation = (key) => dispatch => {
    dispatch(startRequest());
    axios.get(`api/search/services/requests/location/?q=${key}`)
        .then((res) => {
            dispatch(successFetch(res.data.data))
        })
        .catch((err) => {
            const errors = err;
            dispatch(failServices(errors))
        })
}

//search requests by keyword
export const searchKey = (key) => dispatch => {
    dispatch(startRequest());
    axios.get(`api/search/services/requests/?q=${key}`)
        .then((res) => {
            dispatch(successFetch(res.data.data))
        })
        .catch((err) => {
            const errors = err;
            dispatch(failServices(errors))
        })
}

//get requests by service
export const getRequestService = (id) => dispatch => {
    dispatch(startRequest());
    axios.get(`/api/all-requests/${id}`)
        .then((res) => {
            dispatch(successFetch(res.data))
        })
        .catch((err) => {
            dispatch(fetchErrors(err))
        })
}