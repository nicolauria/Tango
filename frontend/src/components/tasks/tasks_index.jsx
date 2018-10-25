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
                    fetchProject={this.props.fetchProject}
                    project={this.props.projects} />
            );
        });

        return(
            <div>
                <h1>This is the tasks index page</h1>
                <ul>
                    {tasks}
                </ul>
            </div>
        );


    }
}

export default TaskIndex;
