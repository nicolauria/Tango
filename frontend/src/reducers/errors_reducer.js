import sessionErrorsReducer from './session_errors_reducer';
import {combineReducers} from 'redux'
import projectsErrorsReducer from './projects_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    projects: projectsErrorsReducer,
})

export default errorsReducer;