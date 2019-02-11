import {authTypes} from '../actionTypes'
const initialState = {
    isAutheticate: false,
    token: localStorage.getItem('token'),
    loading: false,
    errors: [],
    successMsg: '',
    authRedirectPath: '/dashboard',
    user: JSON.parse(localStorage.getItem('user')),
    isProvider: localStorage.getItem('isProvider'),
}

export default (state = initialState, action) => {
  switch (action.type) {

    case authTypes.LOGIN_REQUEST:
        return {
                ...state,
                loading: true, 
            }
    case authTypes.LOGIN_SUCCESS:
        return{
            ...state,
            loading: false,
            token: action.payload,
            isAutheticate: true,
            errors: [],
            successMsg: action.successMsg,
        }
    case authTypes.LOGIN_FAIL:
        return{
            ...state,
            loading: false,
            errors: action.payload,
            isAutheticate: false,
        }
    case authTypes.REGISTER_REQUEST:
        return {
                ...state,
                loading: true, 
                errors: [],
            }
    case authTypes.REGISTER_SUCCESS:
        return{
            ...state,
            loading: false,
            token: action.payload,
            isAutheticate: true,
            errors: [],
        }
    case authTypes.REGISTER_FAIL:
        return{
            ...state,
            loading: false,
            errors: action.payload,
            isAutheticate: false,
        }
    case authTypes.LOGOUT: 
        return{
            ...state,
            isAutheticate: false,
            token: action.token,
            user: [],
        }
    case authTypes.IS_LOGIN: 
        return{
            ...state,
            isAutheticate: action.payload
        }
    case authTypes.SET_AUTH_REDIRECT_PATH:
        return{
            ...state,
            authRedirectPath: action.path
        }
    case authTypes.GET_USER:
        return{
            ...state,
            user: action.user
        }
    case authTypes.IS_PROVIDER: 
        return{
            ...state,
            isProvider: isProvider
        }

    default:
        return state
  }
}
