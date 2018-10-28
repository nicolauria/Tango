import {RECEIVE_CURRENT_USER} from '../util/session_api_util';
import {RECEIVE_ALL_USERS} from '../actions/users_actions';
import {merge} from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS: 
      return action.users.data.users
    case RECEIVE_CURRENT_USER:

      return merge({}, state, {[action.payload.id]: action.payload})

    default:
    return state;
  }
}

export default usersReducer;