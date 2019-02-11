import { serviceActionTypes } from '../actionTypes';
//on start of the request
export const requestServices = () => {
    return {
        type: serviceActionTypes.REQUEST_SERVICES
    };
};

//called when the request is successful
export const requestSuccess = (services) => {
    return {
        type: serviceActionTypes.FETCH_SERVICES,
        payload: services
    };
};

//called when there's an error on the fetch
export const requestError = (errors) => {
    return {
        type: serviceActionTypes.ERROR_SERVICES,
        payload: errors
    };
};

//user to get more services from the paginated list
export const getMore = (more, lastPage, currentPage) => {
    return {
        type: serviceActionTypes.LOAD_MORE_SERVICES,
        more: more,
        lastPage: lastPage,
        currentPage: currentPage
    }
}

//request services by category
export const getServicesByCat = (more, lastPage, currentPage) => {
    return {
        type: serviceActionTypes.CAT_SERVICES,
        more: more,
        lastPage: lastPage,
        currentPage: currentPage
    }
}



//api request for getting services 
export const getServices = () => dispatch => {
    dispatch(requestServices);
    axios.get('/api/services1')
        .then((res) => {
            dispatch(requestSuccess(res.data))
        })
        .catch((err) => {
            const errors = err.response.data;
            dispatch(requestError(errors));
        })
}

//api request for getting services  by category
export const getServicesCat = (catid, page) => dispatch => {
    dispatch(requestServices);
    axios.get(`api/servicess/${catid}?page=${page}`)
        .then((res) => {
            dispatch(getServicesByCat(res.data.data, res.data.last_page, res.data.current_page))
        })
        .catch((err) => {
            const errors = err.response.data;
            dispatch(requestError(errors));
        })
}

//api request for getting more services
export const getMoreServices = (page) => dispatch => {
    axios.get(`api/services?page=${page}`)
        .then((res) => {
            dispatch(getMore(res.data.data, res.data.last_page, res.data.current_page))
        })
        .catch((err) => {
            const errors = err.response;
            dispatch(requestError(errors));
        })
}





