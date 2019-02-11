import {FETCH_POSTS, NEW_POSTS} from './types'

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            dispatch({
                type: FETCH_POSTS,
                payload: res.data
            })
        })
}

export const addPost = (postData) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then((res) => {
            dispatch({
                type: NEW_POSTS,
                payload: res.data
            })
        })
}