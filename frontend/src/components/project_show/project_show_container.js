import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProjects } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => ({
  userProjects: state.entities.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
