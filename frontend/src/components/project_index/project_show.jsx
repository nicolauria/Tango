import React from 'react';
import './project_show.css';
import { Link } from 'react-router-dom';
import addItem from './add-item.jpeg';


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
            <span className="task-owner-name">{task.teamMemberId.name}</span>
          </div>
          <div>
            <span className="complete-task">mark complete</span>
          </div>
        </div>
      )
    })
    return <div className="task-items-container">
    { tasks.length === 0 ?
      <div className="no-tasks-yet">no tasks added yet</div> : tasks}</div>
  }

  toggleTasks(e, project) {
    e.preventDefault()
    e.stopPropagation();
    this.props.history.push(`/projects/${project._id}`)
  }

  getTeamMemberCount(project) {
    let teamMembers = [];
    project.tasks.forEach(task => {
      if (!teamMembers.includes(task.teamMemberId.name)) {
        teamMembers.push(task.teamMemberId.name)
      }
    })
    return teamMembers.length
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
                Team Members: {this.getTeamMemberCount(project)}</span><br />
              <span className="project-completion-percentage">
                35% Complete
              </span>
          </div>
        )
      })
    } else {
      projects = null;
    }

    return(
      <div className="projects-index-component">
        <h1 className="recent-projects">Recent Projects</h1>
        <div className="projects-container">
          <button className="project-button" onClick={() => this.props.openModal('project_create')}>
            <div className="new-project-button">
              <div>New Project</div>
              <img className="button-image" src={addItem} />
            </div>
          
          </button>
          <div className="project-items-container">
            { projects === null ? null : projects.slice(0, 4) }
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectShow;
