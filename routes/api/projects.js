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
    managerId: req.body.managerId,
    idealProjectLength: req.body.idealProjectLength
  })

  newProject.save().then(project => {
    res.json({
      id: project.id,
      title: project.title,
      description: project.description,
      managerId: project.managerId,
      idealProjectLength: project.idealProjectLegth
    })
  })
})

router.get('/:projectId', (req, res) => {
  project = Project.find({projectId: req.params.projectId});
  console.log(project)
  res.json({
    title: project.title
  })
})

module.exports = router;