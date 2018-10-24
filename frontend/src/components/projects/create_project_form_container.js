import {connect} from 'react-redux'

import { createProject } from '../../actions/project_actions';
import ProjectForm from './navbar';

const mapStateToProps = ({session}) => {
    return({
        formType: 'Create'
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createForm: (project) => dispatch(createProject(project))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);