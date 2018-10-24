import React from 'react';

class ProjectShow extends React.Component {
  componentDidMount() {
    // this.props.fetchUserProjects();
  }

  render() {
    const projects = this.props.userProjects.map(project => {
      project.title
    })

    return(
      <div>
        Project Show Page
        { projects }
      </div>
    )
  }
}

export default ProjectShow;
