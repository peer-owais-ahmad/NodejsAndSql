const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const { mysqlConnection } = require("./sqlconn");
const { myconnect } = require("./sqlconnect");
var app = express();

const learners = require("./routes/learners");

//Configuring express server
app.use(bodyparser.json());
myconnect();

app.use("/learners", learners);

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
