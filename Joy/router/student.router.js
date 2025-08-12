// const express = require("express");
// const router = express.Router();
// const {
//   newStudent,
//   getAllStudent,
//   getOneStudent,
//   updateAllStudent,
//   deleteAllStudent,
// } = require("../controller/student.controller");

// router.route("/newstudent").post(newStudent);
// router.route("/getallstudent").get(getAllStudent);
// router.route("/getonestudent/:id").get(getOneStudent);
// router.route("/updateallstudent/:id").put(updateAllStudent);
// router.route("/deleteallstudent/:id").put(deleteAllStudent);

// module.exports = router;

const express = require("express");
const {
  newUser,
  getAllUser,
  getOneUser,
  updateAllUser,
  deleteAllUser,
} = require("../controller/student.controller");
const router = express.Router();

router.route("/newuser").post(newUser);
router.route("/getalluser").get(getAllUser);
router.route("/getoneuser").get(getOneUser);
router.route("/updatealluser").put(updateAllUser);
router.route("/deletealluser").delete(deleteAllUser);

module.exports = router;

jyokoduwa;
seEsqLxd5BVozzZO;
