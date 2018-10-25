import React from 'react';
import TaskIndexItem from './tasks_index_item';

class TaskIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchTasks();
    }

    render(){
        debugger
        const tasks = Object.values(this.props.tasks).map( task => {
            debugger
            return(
                <TaskIndexItem key={task.id} task={task} />
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
