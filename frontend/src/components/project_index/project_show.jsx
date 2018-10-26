import React from 'react';
import './project_show.css';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.displayTasks.bind(this);
    this.state = {
      currentProject: null
    }
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  displayTasks() {
    if (this.state.currentProject === null) return null;
    const tasks = this.state.currentProject.tasks.map(task => {
      return(
        <div className="task-item">
          <div>
            <span className="task-item-name">{task.title}</span>
            <span className="task-assigned-to">assigned to:</span>
            <span className="task-owner-name">William</span>
          </div>
          <div>
            <span className="complete-task">mark complete</span>
          </div>
        </div>
      )
    })
    return <div className="task-items-container">{tasks}</div>
  }

  toggleTasks(e, project) {
    e.preventDefault()
    e.stopPropagation();
    this.setState({currentProject: project}, () => console.log(this.state))
  }

  render() {
    let projects;
    if (this.props.userProjects.length > 0) {
      projects = this.props.userProjects.map(project => {
        return(
          <div onClick={(e) => this.toggleTasks(e, project)} className="project-item">
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

    debugger
    return(
      <div className="projects-index">
        <h1 className="recent-projects">Recent Projcets</h1>
        <button onClick={() => this.props.openModal('project_create')}>New Project</button>
        <div className="project-items-container">
          { projects === null ? null : projects.slice(0, 4) }
        </div>
        {this.displayTasks()}
      </div>
    )
  }
}

export default ProjectShow;
