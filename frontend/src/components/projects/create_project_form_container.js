import {connect} from 'react-redux'

import { createProject } from '../../actions/projects_actions';
import ProjectForm from './project_form';
import {closeModal} from "../../actions/modal_actions"

const mapStateToProps = ({errors}) => {
    return({
        errors: errors.projects,
        formType: 'New Project'
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        createForm: (project) => dispatch(createProject(project)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
