const express = require("express");
const { mysqlConnection } = require("../sqlconn");
const router = express.Router();
const {
  getLearners,
  getLearner,
  updateLearners,
  deleteLearner,
  createLearner,
} = require("../controllers/learners");

router.route("/").get(getLearners).put(updateLearners).post(createLearner);

router.route("/:id").delete(deleteLearner).get(getLearner);

module.exports = router;
