import sessionErrorsReducer from './session_errors_reducer';
import {combineReducers} from 'redux'
import ProjectsErrorsReducer from './projects_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    projects: ProjectsErrorsReducer,
})

export default errorsReducer;