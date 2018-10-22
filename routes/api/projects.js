const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");
const jsonwebtoken = require("jsonwebtoken");
const keys = require("../../config/keys")
const passport = require('passport');
const validateProjectInput = require('../../validations/projects');
// const validateLoginInput = require('../../validations/login');

router.post('/projects', passport.authenticate('jwt', {session: false}), (req, res) => {
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
      title: project.title,
      description: project.description,
      managerId: project.managerId,
      idealProjectLength: project.idealProjectLegth
    })
  })

  // res.json({
  //   id: req.user.id,
  //   name: req.user.name,
  //   email: req.user.email
  // })
})

module.exports = router;
