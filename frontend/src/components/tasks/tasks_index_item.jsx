import React from 'react';

class TaskIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="task-index-item">
                <h2>Task Title: {this.props.task.title}</h2>
                <h3>Expected Time: {this.props.task.time}</h3>
            </div>
        )
    }
}

export default TaskIndexItem;