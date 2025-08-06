const express = require("express");
const router = express.Router();
const {
  newStudent,
  getAllStudent,
  getOneStudent,
  updateAllStudent,
} = require("../controller/student.controller");

router.route("/newstudent").post(newStudent);
router.route("/getallstudent").get(getAllStudent);
router.route("/getonestudent").get(getOneStudent);
router.route("/updateallstudent").put(updateAllStudent);

module.exports = router;
