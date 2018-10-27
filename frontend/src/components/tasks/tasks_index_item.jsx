import './tasks-styling.css'
import { Link } from 'react-router-dom';
import React from 'react';

class TaskIndexItem extends React.Component{

   
    componentDidMount(){
        this.props.fetchProject(this.props.task.projectId)
    }

    render(){

        const projectName = this.props.project[this.props.task.projectId]
            if (projectName === undefined) {
                return <div className="task-index-item"> </div>
            } else {
                const projectTitle = this.props.project[this.props.task.projectId].title
    
                const completed = this.props.task.completed ? "true" : "false"
                
                return(
                    <div className="task-index-item">
                        <h3>Task Title: {this.props.task.title}</h3>
                        <h4>Project: <Link to={`/projects/${this.props.task.projectId}`}>{projectTitle}</Link> </h4>
                        <h5>Expected Time: {this.props.task.time}</h5>
                        <h5>Completed: {completed}</h5>
                        <button className="edit-task" onClick={() => this.props.openModal('edit_task', this.props.task)}>Edit</button>
                    </div>
                )
            }
    }
}

export default TaskIndexItem;