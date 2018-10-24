import React from 'react'

class ProjectForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: '',
            description: '',
            idealProjectLength: '',
        }
    }

    render() {
        debugger
        return(
            <div>
                <form submit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>

                </form>
            </div>
        )
    }
}

