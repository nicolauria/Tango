import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: ProjectsReducer,
})

export default entitiesReducer;