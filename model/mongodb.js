const mongodb = require("mongodb");
require("dotenv").config();

// Password for MongoDB database
const mongodbPassword = process.env.MONGODB_PASSWORD;

// MongoDB Atlas URL

 const url = `mongodb+srv://ajithkumar:vFyL3UmPueNfjZFF@cluster0.a4mcnhg.mongodb.net/?retryWrites=true&w=majority`;


// Connect to MongoDB Atlas
const client = new mongodb.MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Error if cannot connect to MongoDB Atlas
client.connect()
  .then(() => {
    console.log(`DB connected :: ${mongodbPassword}`);
  })
  .catch((err) => {
    console.error("Error in connecting to MongoDB :: ", err);
  });

module.exports = { client };
