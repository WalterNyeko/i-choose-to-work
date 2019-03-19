import {profileTypes} from '../../types'

export const requestProfile = () => ({
  type: profileTypes.REQUEST_PROFILE,
})

export const successProfile = (profile, bio, services) => ({
    type: profileTypes.SUCCESS_PROFILE,
    payload: {
        profile,
        bio,
        services
    }
})

export const failProfile = (error) => ({
  type: profileTypes.FAIL_PROFILE,
  payload: {
      error
  }
})

export const getProfile = (id) => dispatch => {
    dispatch(requestProfile())
    axios.get(`/api/profile/${id}`)
        .then((res) => {
            const profile = res.data;
            const bio = res.data.bio_profile;
            const services = res.data.services;
            dispatch(successProfile(profile, bio, services));
            // console.log(res);
        }) 
        .catch((err) => {
            dispatch(failProfile(err))
        })
}

