import { questionTypes } from '../actionTypes';

export const requestQuestions = () => {
    return {
        type: questionTypes.REQUEST_QUSTIONS
    };
};

export const getQuestionSuccess = (questions) => {
    return {
        type: questionTypes.GET_QUESTIONS,
        payload: {
            questions: questions
        }
    }
}

export const getFail = (errors) => {
    return {
        type: questionTypes.REQUEST_FAIL,
        payload: {
            errors: errors
        }
    }
}

export const fetchQuestions = (id) => dispatch => {
    dispatch(requestQuestions())
    axios.get(`/api/questions/${id}`)
        .then((res) => {
            dispatch(getQuestionSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getFail(err.response.data))
        })
}