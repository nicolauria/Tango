import {initWeb, CanvasState} from './circles';
import React from 'react';
import Modal from '../modals/modal';
import WebCanvasContainer from './web_canvas_container';
import './web_chart.css'

class WebChart extends React.Component {
    constructor(props) {
      super(props)
      this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentDidMount(){
        // let a = this.myCanvas
        // initWeb(this.props.project)
<<<<<<< HEAD
        // initWeb();
=======
        initWeb();
        this.props.removeTasks();
        this.props.fetchProjectTasks(this.props.match.params.projectId)
    }

    handleDeleteClick(e, task) {
      e.preventDefault();
      e.stopPropagation();
      this.props.removeTask(task)
>>>>>>> 942bb06ea14edb4b6f414fb3ea7b6346bbfa1197
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
      project.tasks.forEach(task => {
        if (!teamMembers.includes(task.teamMemberId.name)) {
          teamMembers.push(task.teamMemberId.name)
        }
      })
      return teamMembers.length
    }

   longest_path(task, tasks, best_path = [], best_length = 0, curr_path = [], curr_length = 0){

      curr_length += task.time
      curr_path += [task.title]
      if (task.preReqs.length === 0) {
          if (curr_length > best_length) {
              best_length = curr_length
              best_path = curr_path
              return {
                  best_length,
                  best_path 
              }
          }
      }
      let res = {
          best_path, 
          best_length
      }
    
      task.preReqs.forEach( task1 => {
          let newRes = this.longest_path(tasks[task1], tasks, best_path, best_length, curr_path, curr_length)
          if (newRes.best_length > res.best_length) {
              res = newRes
          }
      })
      
      return res 
  }

    render(){
<<<<<<< HEAD
      debugger
=======

        // const algorithm = () => {
        //   if ((this.props.project != undefined) && (this.props.project.tasks != undefined)) {
        //     const tasks = {}
        //     this.props.project.tasks.forEach(task => {
        //       tasks[task._id] = task
        //     })
        //     debugger
        //     const lastTask = this.props.project.tasks[this.props.project.tasks.length - 1]
        //     const res = this.longest_path(lastTask, tasks);
        //     debugger 
        //     return res
        //   }
        // }

>>>>>>> 942bb06ea14edb4b6f414fb3ea7b6346bbfa1197
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
                    <div className="algorithm-info">
                      <div className="shortest-time">
                     
                      </div>
                      <div className="optimal-path">
                      </div>
                    </div>
                    <h1 className="project-tasks-title">Project Tasks</h1>
                    <button className='create-task-button' onClick={() => this.props.openModal('create_task', [this.props.project])}>Add Task</button>
                    <div className="project-tasks">{this.fetchProjectTasks()}</div>
                </div>
<<<<<<< HEAD
                <WebCanvasContainer />                

=======
                <canvas className="web-chart" id="canvas_field" ref={el => this.myCanvas = el} width="1000" height="1000"></canvas>
>>>>>>> 942bb06ea14edb4b6f414fb3ea7b6346bbfa1197
            </div>
        )
    }
}

export default WebChart;
