const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { sequelize } = require("./client/src/models");
const { models } = require("./client/src/models");

// postgres defaults
// PGHOST='localhost'
// PGUSER=process.env.USER
// PGDATABASE=process.env.USER
// PGPASSWORD=null
// PGPORT=5432

/* bcrypt.hash(password, 10, (err, hash) {
  // store hashed password to db
}) */

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.post("/users", (req, res) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) console.error(err);
    req.body.password = hash;
  });
  console.log(req.body); // display request with hashed password

  // need to save to db
  // User.create(req.body)
  // then update redux store
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
