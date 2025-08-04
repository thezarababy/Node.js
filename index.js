// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// app.use(express.json());
// async function connectToBD() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/sailchat");
//     console.log("database connected");
//   } catch (err) {
//     console.log(err);
//   }
// }
// connectToBD();
// const UserSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   password: String,
//   email: String,
//   isAdmin: Boolean,
// });
// const UserModel = new mongoose.model("User", UserSchema);

// app.post("/signup", async (request, response) => {
//   try {
//     let newUser = new UserModel({
//       firstName: request.body.firstName,
//       lastName: request.body.lastName,
//       password: request.body.password,
//       email: request.body.email,
//       isAdmin: request.body.isAdmin,
//     });
//     await newUser.save();
//     response.json({
//       message: "signup successfull",
//       data: newUser,
//     });
//   } catch (err) {
//     response.status(500).json({ error: "something went wrong" });
//   }
// });

// app.get("/allUsers", async (req, res) => {
//   try {
//     const myUser = await UserModel.find();
//     res.json({
//       message: "all user gotten successfully",
//       data: myUser,
//     });
//   } catch (err) {
//     res.status(500).json({ error: "failed to fetch all users" });
//   }
// });

// app.listen(8000, () => console.log("i am listening on this app"));

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const dBConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ajo");
    console.log("i am connected");
  } catch (err) {
    console.log(err);
  }
};
dBConnect();
app.listen(9000, () => console.log("i am active"));

const AjoSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const AjoModel = new mongoose.model("AjoUsers", AjoSchema);

// create new user
app.post("/signup", async (req, res) => {
  try {
    let newAjoUser = new AjoModel({
      username: req.body.username,
      password: req.body.password,
    });
    await newAjoUser.save();
    res.json({
      message: "user created",
      data: newAjoUser,
    });
  } catch (err) {
    res.status(500).json({ error: "failed to create user" });
  }
});

app.get("/allusers", async (req, res) => {
  try {
    const myAjoUser = await AjoModel.find();
    res.json({
      message: "all users gotten",
      data: myAjoUser,
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "failed to fetch all users" });
  }
});
