const { mysqlConnection } = require("../sqlconn");

//simple get
exports.getLearners = (req, res) => {
  mysqlConnection.query("SELECT * FROM learnerdetails", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

//simple put
exports.updateLearners = (req, res) => {
  let learner = req.body;
  var sql =
    "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddOrEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
  mysqlConnection.query(
    sql,
    [
      learner.learner_id,
      learner.learner_name,
      learner.learner_email,
      learner.course_Id,
    ],
    (err, rows, fields) => {
      if (!err) res.send("Learner Details Updated Successfully");
      else console.log(err);
    }
  );
};

//simple post
exports.createLearner = (req, res) => {
  let learners = req.body;
  var sql =
    "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddOrEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
  mysqlConnection.query(
    sql,
    [
      learners.learner_id,
      learners.learner_name,
      learners.learner_email,
      learners.course_Id,
    ],
    (err, rows, fields) => {
      if (!err)
        rows.forEach((element) => {
          if (element.constructor == Array)
            res.send("New Learner ID : " + element[0].learner_id);
        });
      else console.log(err);
    }
  );
};

//id get
exports.getLearner = (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM learnerdetails WHERE learner_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

//id delete
exports.deleteLearner = (req, res) => {
  mysqlConnection.query(
    "DELETE FROM learnerdetails WHERE learner_id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Learner Record deleted successfully.");
      else console.log(err);
    }
  );
};
