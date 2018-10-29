import React from 'react';
import './create_task_form.css'

class CreateTaskFrom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            completed: false,
            projectId: this.props.project[0]._id,
            preReqs: [],
            time: "0",
            teamMemberId: "0",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.updateDependencies = this.updateDependencies.bind(this);
    }

    handleSubmit(e){
        debugger
        e.preventDefault();
        this.props.createTask(this.state);
        this.props.closeModal();
    }

    updateForm(field){
        return (
          (e) => {
            this.setState({[field]: e.target.value})
          }
        );
    }

    updateDependencies(e){
        debugger
            this.setState({preReqs: this.state.preReqs.concat([e.currentTarget.value])})

    }

    render(){
        const listOfUsers = this.props.users.map( user => {
            return <option value={user._id}>{user.name}</option>;
        });

        const dependencies = this.props.project[0].tasks.map( task => {
            return (
            <div>
                <label>{task.title}</label>
                <input type="checkbox" value={task._id} onChange={this.updateDependencies} />
            </div>
            )
        });

        return(
            <div className="create-task-container">
                <div>Create A New Task</div>
                <form className="creat-task-form" onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <br/>
                    <input type="text" value={this.state.title} onChange={this.updateForm("title")} />
                    <br/>
                    <label>Estimate Time</label>
                    <br/>
                    <input type="number" onChange={this.updateForm("time")} />
                    <br/>
                    <label>Assign Team Member</label>
                    <br/>
                    <select name="teamMember" onChange={this.updateForm("teamMemberId")}>
                        <option value="" selected>Choose Team Member</option>
                        {listOfUsers}
                    </select>
                    <br/>
                    <label>Dependecies</label>
                    {dependencies}
                    <br/>
                    <input type="submit" value="Create Task" />

                </form>
            </div>

        )
    }


}

export default CreateTaskFrom;