import React from 'react';
import './project_show.css';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    let projects;
    if (this.props.userProjects.length > 0) {
      projects = this.props.userProjects.map(project => {
        return(
          <div className="project-item">
            <span className="project-item-name">{project.title}</span>
            <span className="project-task-count">
              Tasks: {project.tasks.length}</span><br />
              <span className="project-team-member-count">
                Team Members: 0</span><br />
              <span className="project-completion-percentage">
                35% Complete
              </span>
          </div>
        )
      })
    } else {
      projects = null;
    }

    // console.log(this.props.userProjects)
    return(
      <div className="projects-index">
        <h1>All Projcets</h1>
        <div className="project-items-container">
          { projects }
        </div>
        <h1>Recent Activity</h1>
      </div>
    )
  }
}

export default ProjectShow;
