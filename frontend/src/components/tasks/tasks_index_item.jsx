import './tasks-styling.css'
import React from 'react';
const thing = 1;

class TaskIndexItem extends React.Component{
    constructor(props){
        super(props);
    }
   
    componentDidMount(){
        this.props.fetchProject(this.props.task.projectId)
    }

    render(){
        console.log(this.props.task.title)
        console.log(this.props.project)
        return(
            <div className="task-index-item">
                <h2>Task Title: {this.props.task.title}</h2>
                <h3>Project: </h3>
                <h3>Expected Time: {this.props.task.time}</h3>
            </div>
        )
    }
}

export default TaskIndexItem;