import {authTypes} from '../actionTypes';

export const loginRequest = () => {
    return {
        type: authTypes.LOGIN_REQUEST
    };
};
export const loginSuccess = (token) => {
    return {
        type: authTypes.LOGIN_SUCCESS,
        payload: token
    };
};
export const loginFails = (errors) => {
    return {
        type: authTypes.LOGIN_FAIL,
        payload: errors
    };
};
export const registerRequest = () => {
    return {
        type: authTypes.REGISTER_REQUEST
    };
};
export const registerSuccess = (token) => {
    return {
        type: authTypes.REGISTER_SUCCESS,
        payload: token,
    };
};
export const registerFail = (errors) => {
    return {
        type: authTypes.REGISTER_FAIL,
        payload: errors
    };
};
export const isStillLogin = (status) => {
    return {
        type: authTypes.IS_LOGIN,
        payload: status
    };
};

export const isLogout = (token) => {
    return{
        type: authTypes.LOGOUT,
        token: token,
        user: user,
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: authTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const getUserCredentials = (user) => {
    return {
        type: authTypes.GET_USER,
        user: user
    }
}

export const isProvider = (isProvider) => {
    return {
        type: authTypes.IS_PROVIDER,
        isProvider: isProvider,
    }
}

//api request for login
export const login = (name, pass) => dispatch => {
    dispatch(loginRequest());
    const postData = {
        email: name,
        password: pass
    }
    axios.post('/api/login', postData)
        .then((res) => {
            const token = res.data.token.access_token;
            dispatch(loginSuccess(token));
            localStorage.setItem('token', token);
            dispatch(getUserCredentials(res.data.user))
            const user = JSON.stringify(res.data.user)
            localStorage.setItem('user', user);
            localStorage.setItem('isProvider', res.data.isProvider);
            dispatch(isProvider(res.data.isProvider));
        })
        .catch((err) => {
            const errors = err;
            dispatch(loginFails(errors));
        })
}


//api request for registration
export const register = (data) => dispatch => {
    dispatch(registerRequest());
    axios.post('/api/register', data)
        .then((res) => {
            const token = res.data.token.access_token;
            dispatch(registerSuccess(token));
            localStorage.setItem('token', token);
            dispatch(getUserCredentials(res.data.user));
            const user = JSON.stringify(res.data.user)
            localStorage.setItem('user', user);
            localStorage.setItem('isProvider', res.data.isProvider);
            dispatch(isProvider(res.data.isProvider));
        })
        .catch((err) => {
            const errors = err.response.data;
            dispatch(registerFail(errors));
        })
}

//check wheter user is logged in
export const logout = () => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isProvider');
    const user = [];
    dispatch(isStillLogin(false, user));
}

//check user token
export const isLogin = () => dispatch => {
    const token = localStorage.getItem('token');
    if(token)
    {
        dispatch(isStillLogin(true))
    }
    else 
    {
        dispatch(isStillLogin(false))
    }
}

//get user id
export const getUser = (token) => dispatch => {
    dispatch(getUserCredentials(res.data));
}





