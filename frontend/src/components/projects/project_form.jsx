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
    handleSubmit(){
        const project = Object.assign({}, this.state)
        this.props.createForm(project).then(this.props.closeModal)
    }

    render() {
        return(
            <div className="project-form-background">
                <h1>ProjectForm</h1>
                <form submit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                    <input onChange="" placeholder="Title" value=""></input> 
                    <input onChange="" placeholder="Description" value=""></input> 
                    <input onChange="" placeholder="idealProjectLength" value=""></input> 
                    <input type="submit" value="Create Project"/>
                </form>
            </div>
        )
    }
}

export default ProjectForm;
