const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  managerId: {
    type: String,
    required: true
  },
  idealProjectLength: {
    type: Number,
    required: true
  }
})

module.exports = Project = mongoose.model('projects', ProjectSchema);
