const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  admissionNo: {
    type: String,
  },
  bio: {
    type: String,
  },
});
const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;
