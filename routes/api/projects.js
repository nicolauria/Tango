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
    idealProjectLength: req.body.idealProjectLength
  })

  newProject.save().then(project => {
    res.json({
      id: project.id,
      title: project.title,
      description: project.description,
      managerId: project.managerId,
      idealProjectLength: project.idealProjectLength
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

  Project.find({ managerId: req.user.id })
    .sort({ date: -1 })
    .then(projects => res.json(projects))
    .catch(err => 
      res.status(404).json({ noprojectsfound: "No projects found" })
    );
});

router.get('/:projectId', passport.authenticate('jwt', { session: false }), (req,res) =>{
  Project.findById(req.params.projectId)
    .then(project => res.json(project))
    .catch(err => res.status(404).json({noprojectfound: "No project found with that ID."}))
});


module.exports = router;
