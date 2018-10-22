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
        projectId: req.body.projectId
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

module.exports = router;