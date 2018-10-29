const express = require("express");
const app = express();
const users = require("./routes/api/users");
const projects = require("./routes/api/projects");
const tasks = require("./routes/api/tasks");
const passport = require("passport");

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

require("./config/passport")(passport);

const bodyParser = require('body-parser');

const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello world!"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/tasks", tasks)

module.exports = db;
