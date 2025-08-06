const { default: mongoose } = require("mongoose");
const studentModel = require("../model/student.model");

const newStudent = async (req, res) => {
  try {
    const { studentName, email, age, bio } = req.body;
    const randomAdminNo = Math.floor(Math.random() * 10000);
    const createStudent = await studentModel.create({
      studentName,
      email,
      age,
      bio,
      admissionNo: `STU-${randomAdminNo}`,
    });
    res.status(201).json({
      message: "New student added",
      data: createStudent,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed to create New student",
      data: error,
    });
  }
};
const getAllStudent = async (req, res) => {
  try {
    const getStudent = await studentModel.find();
    res.status(200).json({
      message: "All student gotten",
      data: getStudent,
    });
  } catch (error) {
    res.status(400).json({
      message: "get to create New student",
      data: error,
    });
  }
};

const getOneStudent = async (req, res) => {
  try {
    const getOne = await studentModel.findById(req.params.id);
    res.status(200).json({
      message: " user gotten",
      data: getOne,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to get user",
      data: error,
    });
  }
};
const updateAllStudent = async (req, res) => {
  try {
    const { studentName, bio } = req.body;
    const updateStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      { studentName, bio },
      { new: true }
    );
    res.status(200).json({
      message: "All student gotten",
      data: updateStudent,
    });
  } catch (error) {
    res.status(400).json({
      message: "get to create New student",
      data: error,
    });
  }
};
module.exports = { newStudent, getAllStudent, getOneStudent, updateAllStudent };
