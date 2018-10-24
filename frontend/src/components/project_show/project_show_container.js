import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
  userProjects: state.entities.userProjects
});

const mapDispatchToProps = dispatch => ({
  // fetchUserProjects: () => dispatch(fetchUserProjects())
});

export default (mapStateToProps, mapDispatchToProps)(ProjectShow);
