import { serviceTypes, singleServiceTypes } from '../../types';
import { Api } from '../../../constants';

export const requestServices = () => {
    return {
        type: serviceTypes.REQUEST_SERVICES
    };
};

export const successServices = (services) => {
    return {
        type: serviceTypes.SUCCESS_SERVICES,
        payload: {
            services
        }
    }
}

export const failServices = (errors) => {
    return {
        type: serviceTypes.FAIL_SERVICES,
        payload: {
            errors
        }
    }
}

export const getServices = () => dispatch => {
    dispatch(requestServices());
    axios.get(Api.ALLSERVICES)
         .then((res) => {
             dispatch(successServices(res.data))
         })
         .catch((err) => {
             const errors = err.response.data;
             dispatch(failServices(errors))
         })
}

export const requestService = () => {
    return {
        type: singleServiceTypes.REQUEST_SERVICE
    }
}

export const successService = (service) => {
    return {
        type: singleServiceTypes.SERVICE_SUCCESS,
        payload: {
            service
        }
    }
}

export const failService = (errors) => {
    return {
        type: singleServiceTypes.FAIL_SERVICE,
        payload: {
            errors
        }
    }
}

export const getServicesPaginated = () => dispatch => {
    dispatch(requestServices());
    axios.get(Api.SERVICES_PAGINATED)
        .then((res) => {
            dispatch(successServices(res.data))
        }) 
        .catch((err) => {
            dispatch(failServices(err))
        })
}


export const getServiceCategory = (id) => dispatch => {
    dispatch(requestServices());
    axios.get(Api.CATEGORY_SERVICES + '/' + id)
        .then((res) => {
            dispatch(successServices(res.data.data))
        })
        .catch((err) => {
            const errors = err;
            dispatch(failServices(errors))
        })
}

export const getSingleService = (id) => dispatch => {
    dispatch(requestService());
    axios.get(`api/services/${id}`)
        .then((res) => {
            const service = JSON.stringify(res.data)
            sessionStorage.setItem('service', service)
            dispatch(successService(service))
        })
        .catch((err) => {
            dispatch(failService(err))
        })
}