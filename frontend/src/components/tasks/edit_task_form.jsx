import './edit_task.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

class EditTaskForm extends React.Component {
  constructor(props){
    super(props)
    const task = this.props.task

    this.state = {
      id: task._id,
      title: task.title,
      time: task.time,
      teamMemberId: task.teamMemberId,
      completed: task.completed,
      projectId: task.projectId,
      preReqs: task.preReqs
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateTask(this.state);
    this.props.fetchTasks();
    this.props.closeModal();
  }

  updateForm(field){
    // console.log(e.currentTarget)
    return (
      (e) => {
        this.setState({[field]: e.target.value})
      }
    );
  }

  updateBoolean(field){
    return (
      (e) => {

        this.setState({[field]: (e.target.value === "true")})
      }
    );
  }


  render(){
    console.log(this.state.completed)
    return(
      <div className="task-edit-form">
        <div className="task-edit-heading">Update Task</div>
        <div className="form-container">
          <form className="form-review" onSubmit={this.handleSubmit}>
            <label className="review-label" >Expected Time</label>
            <input
              type="number"
              value={this.state.time}
              onChange={this.updateForm('time')} />
              <br/>
              <div className="radio-inputs">
                <label><input type="radio" name="progress" value="false" checked={this.state.completed === false} onChange={this.updateBoolean("completed")} />In Progress</label>
                <br/>
                <label><input type="radio" name="progress" value="true" checked={this.state.completed === true} onChange={this.updateBoolean("completed")} />Completed</label>
                <br/>
                <label className="review-label">Notes</label>
                
              </div>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
}

}

export default withRouter(EditTaskForm);
// placeholder={this.state.time}
// <textarea
//   rows="5"
//   cols="30"
//   value={this.state.description}
//   onChange={this.updateForm('description')}/>