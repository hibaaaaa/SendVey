const express = require("express");
const app = express();

//route handler watching for incoming HTTP requests
app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});
//look at the environment and see if Heroku has
//declared a port for us to use
//if there is an environment variable already defined
//by Heroku go ahead otherwise just use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
