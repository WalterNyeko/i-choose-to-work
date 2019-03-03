import { registerTypes } from '../../types/authTypes';
import { Api } from '../../../constants';

export const requestRegister = () => {
    return {
        type: registerTypes.REGISTER_REQUEST
    };
};

export const registerSuccess = (token) => {
    return {
        type: registerTypes.REGISTER_SUCCESS,
        payload: {
            token
        }
    }
}

export const registerFail = (errors) => {
    return {
        type: registerTypes.REGISTER_FAIL,
        payload: {
            errors
        }
    }
}

export const register = (data) => dispatch => {
    dispatch(requestRegister());
    axios.post(Api.REGISTER, data)
        .then((res) => {
            dispatch(registerSuccess(res.data.access_token));
        })
        .catch((err) => {
            dispatch(registerFail(err.response.data));
        })
} 