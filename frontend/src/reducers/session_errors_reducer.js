import {
    GET_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS
} from '../util/session_api_util';

const sessionErrorsReducer = (state= [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_ERRORS:
           const arrError = Object.values(action.payload)
            return arrError;
        case RECEIVE_CURRENT_USER:
             return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;