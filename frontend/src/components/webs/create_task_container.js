import { connect } from 'react-redux';
import CreateTaskForm from './create_task_form';
import { closeModal } from '../../actions/modal_actions';
import { createTask } from '../../actions/tasks_actions';



const mapStateToProps = (state) => {
  return ({
    users: state.entities.users,
    project: state.ui.modal.data
  });
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createTask: (task) => dispatch(createTask(task)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);