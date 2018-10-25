import './tasks-styling.css'
import React from 'react';
import TaskIndexItem from './tasks_index_item';

class TaskIndex extends React.Component{
 

    componentDidMount(){
        this.props.fetchTasks();
    }

    render(){
        const tasks = Object.values(this.props.tasks).map( task => {
            return(
                <TaskIndexItem 
                    key={task.id} 
                    task={task} 
                    fetchProject={this.props.fetchProject}/>
            );
        });

        return(
            <div className="task-index-page">
                <h1>My Current Tasks</h1>
                <ul>
                    {tasks}
                </ul>
            </div>
        );


    }
}

export default TaskIndex;
