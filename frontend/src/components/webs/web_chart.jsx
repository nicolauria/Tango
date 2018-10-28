import {initWeb, CanvasState} from './circles';
import React from 'react';
import Modal from '../modals/modal';
import './web_chart.css'

class WebChart extends React.Component {
    constructor(props) {
      super(props)
      this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount(){
        let a = this.myCanvas
        // initWeb(this.props.project)
        initWeb();
        this.props.fetchProjectTasks(this.props.match.params.projectId)
    }

    handleDeleteClick(e, task) {
      e.preventDefault();
      e.stopPropagation();
      this.props.removeTask(task)
    }

    fetchProjectTasks() {
      if (this.props.tasks.length === 0) return null;
      const tasks = this.props.tasks.map(task => {
        debugger
        return <div className="project-task">
          <span className="remove-task" onClick={(e) => this.handleDeleteClick(e, task)}>x</span>
          <span className="task-title">{task.title}</span>
          <span className="task-assigned-to">assigned to:</span>
          <span className="task-owner">{task.teamMemberId.name}</span>
        </div>
      })
      return tasks;
    }

    getTeamMemberCount(project) {
      let teamMembers = [];
      // debugger
      project.tasks.forEach(task => {
        if (!teamMembers.includes(task.teamMemberId.name)) {
          teamMembers.push(task.teamMemberId.name)
        }
        // debugger
      })
      return teamMembers.length
    }

    render(){
        return(
            <div className="project-show-page">
                <Modal />
                <div className="left-side-bar">
                    <h1 className="project-title">{this.props.project.title}</h1>
                    <div className="task-details">
                      <span className="project-task-count">
                        Tasks: {this.props.project.tasks.length}</span><br />
                      <span className="project-team-member-count">
                        Team Members: {this.getTeamMemberCount(this.props.project)}</span><br />
                      <span className="project-completion-pct">
                        35% Complete
                      </span>
                    </div>
                    <h1 className="project-tasks-title">Project Tasks</h1>
                    <div className="project-tasks">{this.fetchProjectTasks()}</div>
                </div>
                <canvas className="web-chart" id="canvas_field" ref={el => this.myCanvas = el} width="1000" height="1000"></canvas>

            </div>
        )
    }
}

export default WebChart;
