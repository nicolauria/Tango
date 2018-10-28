import * as UsersApiUtil  from '../util/users_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const fetchUsers = () => dispatch => (
    UsersApiUtil.fetchUsers().then( users => dispatch(receiveAllUsers(users)))
);


