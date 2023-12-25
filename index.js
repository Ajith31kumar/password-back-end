const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 4100;
const URL = process.env.DB;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// mongoose
//   .connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
  // .then(() => {
  //   console.log("MongoDB Connected");
  // })
  // .catch((error) => {
  //   console.error("MongoDB connection error:", error);
  // });

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
