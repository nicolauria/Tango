import React from 'react'
import './project_form.css'

class ProjectForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: '',
            description: '',
            idealProjectLength: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleChange(type){
        return (event) => {
            event.preventDefault();
            return this.setState({[type]: event.currentTarget.value})
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const project = Object.assign({}, this.state)
        this.props.createForm(project).then(this.props.closeModal)
        console.log('well it got here');
    }

    render() {
        return(
            <div className="project-form-background">
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>
                    {this.props.errors}
                    <input onChange={this.handleChange('title')} placeholder="Title" value={this.state.title}></input>
                    <input onChange={this.handleChange('description')} placeholder="Description" value={this.state.description}></input>
                    <input onChange={this.handleChange('idealProjectLength')} placeholder="idealProjectLength" value={this.state.idealProjectLength}></input>
                    <input className="project-form-submit" onClick={this.handleSubmit} type="submit" value="Create Project"/>
                </form>
            </div>
        )
    }
}

export default ProjectForm;
