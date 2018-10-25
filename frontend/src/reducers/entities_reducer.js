import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import TasksReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: ProjectsReducer,
    tasks: TasksReducer,
})

export default entitiesReducer;