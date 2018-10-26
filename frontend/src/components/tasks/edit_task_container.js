import { connect } from 'react-redux';
import EditTaskForm from './edit_task_form'
import { closeModal } from '../../actions/modal_actions';
import { updateTask, fetchTasks } from '../../actions/tasks_actions';



const mapStateToProps = (state) => {
  return ({
    task: state.ui.modal.data

  });
}

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  updateTask: (task) => dispatch(updateTask(task)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskForm);