const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");
const passport = require('passport');
const validateProjectInput = require('../../validations/project_validations');


router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateProjectInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProject = new Project({
    title: req.body.title,
    description: req.body.description,
    managerId: req.user.id,
    idealProjectLength: req.body.idealProjectLength,
    tasks: []
  })

  newProject.save().then(project => {
    res.json({
      _id: project.id,
      title: project.title,
      description: project.description,
      managerId: project.managerId,
      idealProjectLength: project.idealProjectLength,
      tasks: []
    })
  })
})


router.put('/:projectId', passport.authenticate("jwt", { session: false}), (req, res)=> {
  const { errors, isValid } = validateProjectInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Project.findByIdAndUpdate(req.params.projectId, {
    title: req.body.title,
    description: req.body.description,
    managerId: req.user.id,
    idealProjectLength: req.body.idealProjectLength
  })
    .then(project => {
      res.json({
        id: project.id,
        title: project.title,
        description: project.description,
        managerId: project.managerId,
        idealProjectLength: project.idealProjectLength
      });
    })
    .catch(err =>
      res.status(404).json({ noprojectsfound: "No projects found", err })
    );
});

router.get("/", passport.authenticate("jwt", { session: false }), (req,res)=>{
  let userTasks = []
  Task.find({ teamMemberId: req.user.id })
    .then(tasks => {
      tasks.forEach(task => userTasks.push(task.projectId))
    })
    .then(() =>
      Project.find({ $or: [
        { managerId: req.user.id },
        { _id: { $in: userTasks} }
        ]
      })
        .populate({
          path: "tasks",
          populate: {
            path: "teamMemberId",
            model: "users"
          }
        })
        .sort({ date: -1 })
        .then(projects => res.json(projects))
        .catch(err =>
          res.status(404).json({ noprojectsfound: "No projects found" })
        )
    )
});

router.get('/:projectId', passport.authenticate('jwt', { session: false }), (req,res) =>{
  let users = [];
  Project.findById(req.params.projectId)
    .populate("tasks")
    .then(project => {
      project.tasks.forEach(task => {
        User.findById(task.teamMemberId)
        .then(user => users.push(user))
      })
      return project
    })
    .then((project) => res.json({project: project, users: users}))
    .catch(err => res.status(404).json({noprojectfound: "No project found with that ID."}))
});


module.exports = router;
