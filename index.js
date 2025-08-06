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
app.use(express.json());
const studentRouter = require("./router/student.router");

app.use("/api/students", studentRouter);
app.listen(7000, () => console.log("i am listening on this port"));
