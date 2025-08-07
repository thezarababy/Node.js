const moneyModel = require("../model/student.model");

const newUser = async (req, res) => {
  try {
    const { firstName, lastName, email, username } = req.body;
    const createNewUser = await moneyModel.create({
      firstName,
      lastName,
      email,
      username,
    });
    res.status(201).json({
      message: "user created successsfully",
      data: createNewUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "user created successsfully",
      data: error,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const getUser = await moneyModel.find();
    res.status(201).json({
      message: "user gotten successsfully",
      data: getUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed to get users",
      data: error,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const getOne = await moneyModel.findById(req.params.id);
    res.status(201).json({
      message: "user gotten successsfully",
      data: getOne,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed to get users",
      data: error,
    });
  }
};

const updateAllUser = async (req, res) => {
  try {
    const { username } = req.body;
    const updateUser = await moneyModel.findByIdAndUpdate(
      req.params.id,
      { username },
      { new: true }
    );
    res.status(201).json({
      message: "user gotten successsfully",
      data: getOne,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed to get users",
      data: error,
    });
  }
};

const deleteAllUser = async (req, res) => {
  try {
    const deleteUser = await moneyModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      message: "user deleted successsfully",
      data: deleteUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed to delete users",
      data: error,
    });
  }
};

module.exports = {
  newUser,
  getAllUser,
  getOneUser,
  updateAllUser,
  deleteAllUser,
};
