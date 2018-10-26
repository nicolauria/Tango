import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProjects, fetchProject } from '../../actions/projects_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  userProjects: state.entities.projects,
  projectUsers: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchProject: (id) => dispatch(fetchProject(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow));
