const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/databasename");
    console.log("DB connected successfully");
  } catch (err) {
    console.log(err);
  }
}

const userSchema = new mongoose.Schema({
  fistName: String,
  lastName: String,
  emailAddress: String,
  password: String,
  isAdmin: Boolean,
});
const userModel = mongoose.model("User", userSchema);

app.post("/", async (req, res) => {
  res.send("this is the home route");
});
app.post("/signup", async (req, res) => {
  let newUser = new userModel({
    fistName: "joy",
    lastName: "okoduwa",
    emailAddress: "jyokoduwa@gmail.com",
    password: "12345",
    isAdmin: false,
  });
  newUser.save();
  res.send("This is the sign up route");
});
connectToDB();
app.listen(8000, () => console.log("user connected"));
