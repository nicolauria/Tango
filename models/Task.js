const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  teamMemberId: {
    type: String,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
  preReqs: [{ type: Schema.Types.ObjectId, ref: "tasks" }]
});

TaskSchema.post('save', function (saved) {
  console.log('function loaded')
  Project.findByIdAndUpdate(
    this.projectId,
    { $push: { tasks: this } }
  ).then(() => saved())
});

module.exports = Task = mongoose.model('tasks', TaskSchema);