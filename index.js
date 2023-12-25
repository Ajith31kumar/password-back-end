const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4100;
const URL = process.env.DB;

// mongoose
//   .connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('MongoDB Connected');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
