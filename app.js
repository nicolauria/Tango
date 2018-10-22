const express = require("express");
const app = express();
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const projects = require("./routes/api/projects");
const passport = require("passport");
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
app.use("/api/posts", posts);
app.use("/api/projects", projects);
