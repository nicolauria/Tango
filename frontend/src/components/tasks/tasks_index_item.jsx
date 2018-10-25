import './tasks-styling.css'
import React from 'react';
import { fetchProject } from '../../util/projects_api_util';

class TaskIndexItem extends React.Component{
   
    componentDidMount(){
        fetchProject(this.props.task.projectId)
        debugger
    }

    render(){
        debugger
        return(
            <div className="task-index-item">
                <h2>Project: {this.props.task.projectId}</h2>
                <h2>Task Title: {this.props.task.title}</h2>
                <h3>Expected Time: {this.props.task.time}</h3>
            </div>
        )
    }
}

export default TaskIndexItem;