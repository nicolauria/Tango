import axios from 'axios';
import jwt_decode from 'jwt-decode';
const $ = window.$;
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

// setting the auth token on the frontend by these methods
// We use axios to set a default header this is the extra data we send in each request (basically the meta data)
export const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const loginUser = userData => dispatch => {
    axios
        .post('api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setCurrentUser = decoded => {
    return{
        type: RECEIVE_CURRENT_USER,
        payload: decoded
    };
};

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})


export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
