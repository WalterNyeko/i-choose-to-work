import {profileTypes} from '../types'

const initialState = {
    loading: false,
    profile: [],
    errors: [],
    bio: {},
    services: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

  case profileTypes.REQUEST_PROFILE:
    return { 
        ...state, 
        loading: true 
    }
  case profileTypes.SUCCESS_PROFILE:
    return {
        ...state,
        profile: action.payload.profile,
        bio: action.payload.bio,
        services: action.payload.services
    }
  case profileTypes.FAIL_PROFILE:
    return {
        ...state,
        errors: action.payload.errors
    }

  default:
    return state
  }
}
