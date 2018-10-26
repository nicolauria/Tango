const express = require("express");
const router = express.Router();
const Task = require("../../models/Task");
const passport = require('passport');
const validateTaskInput = require('../../validations/task_validations');

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateTaskInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newTask = new Task({
        title: req.body.title,
        time: req.body.time,
        completed: req.body.completed,
        teamMemberId: req.body.teamMemberId,
        projectId: req.body.projectId,
        preReqs: req.body.preReqs
    })

    newTask.save().then(task => {
        res.json({
            id: task.id,
            title: task.title,
            time: task.time,
            completed: task.completed,
            teamMemberId: task.teamMemberId,
            projectId: task.projectId
        })
    })

    
})

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    Task.find({ teamMemberId: req.user.id })
        .sort({ date: -1 })
        .then(tasks => res.json(tasks))
        .catch(err =>
            res.status(404).json({ noprojectsfound: "No projects found" })
        )    
});

router.put('/:taskId', passport.authenticate("jwt", { session: false}), (req, res)=> {
    const { errors, isValid } = validateTaskInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    Task.findByIdAndUpdate(req.params.taskId, {
      title: req.body.title,
      time: req.body.time,
      teamMemberId: req.user.id,
      projectId: req.body.projectId,
      preReqs: req.body.preReqs,
      completed: req.body.completed
    })
      .then(task => {
        res.json({
            title: req.body.title,
            time: req.body.time,
            teamMemberId: req.user.id,
            projectId: req.body.projectId,
            preReqs: req.body.preReqs,
            completed: req.body.completed
        });
      })
      .catch(err =>
        res.status(404).json({ notasksfound: "No tasks found", err })
      );
  });

module.exports = router;