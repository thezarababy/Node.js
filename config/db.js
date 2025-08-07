// const mongoose = require("mongoose");
// const localURI = "mongodb://localhost:27017/school";
// mongoose
//   .connect(localURI)
//   .then(() => {
//     console.log("connected successfully");
//   })
//   .catch((err) => {
//     console.log("failed to connect" + err);
//   });

// module.exports = mongoose;

const mongoose = require(mongoose);
const localURI = "mongodb://localhost:27017/finance";
mongoose
  .connect(localURI)
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("failed to connect" + err);
  });

module.exports = mongoose;
