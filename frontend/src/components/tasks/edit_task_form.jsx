import React from 'react';
import { withRouter } from 'react-router-dom';

class EditTaskForm extends React.Component {
  constructor(props){
    super(props)
    const task = this.props.task

    this.state = {
      id: task.id,
      title: task.title,
      time: task.time,
      teamMemberId: task.teamMemberId,
      completed: task.completed,
      projectId: task.projectId,
      preReqs: task.preReqs
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateTask(this.state)
    this.props.closeModal();
  }


  updateForm(field){
    return (
      (e) => this.setState({[field]: e.target.value})
    );
  }


  render(){
    return(
      <div className="task-edit-form">
        <div className="task-edit-heading">Update Task</div>
        <div className="form-container">
          <form className="form-review" onSubmit={this.handleSubmit}>
            <label className="review-label" >Expected Time</label>
            <input
              type="text"
              value={this.state.time}
              onChange={this.updateForm('time')} />
            <label className="review-label">Notes</label>
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