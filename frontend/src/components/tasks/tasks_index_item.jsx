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

        const projectName = this.props.project[this.props.task.projectId]
            if (projectName === undefined) {
                return <div className="task-index-item"> </div>
            } else {
      
           
                const projectTitle = this.props.project[this.props.task.projectId].title
         
                return(
                    <div className="task-index-item">
                        <h2>Task Title: {this.props.task.title}</h2>
                        <h3>Project: {projectTitle}</h3>
                        <h3>Expected Time: {this.props.task.time}</h3>
                    </div>
                )
            }
    }
}

export default TaskIndexItem;