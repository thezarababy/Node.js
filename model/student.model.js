// const mongoose = require("mongoose");
// const studentSchema = new mongoose.Schema({
//   studentName: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     unique: true,
//   },
//   age: {
//     type: Number,
//   },
//   admissionNo: {
//     type: String,
//   },
//   bio: {
//     type: String,
//   },
// });
// const studentModel = mongoose.model("student", studentSchema);
// module.exports = studentModel;

const mongoose = require("mongoose");

const moneySchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
});
const moneyModel = mongoose.Model("myFinance", moneySchema);

module.exports = moneyModel;
