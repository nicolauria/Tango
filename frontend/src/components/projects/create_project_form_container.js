import {connect} from 'react-redux'

import { createProject } from '../../actions/projects_actions';
import ProjectForm from './project_form';

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