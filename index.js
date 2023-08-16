const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const userAuth = require("./routes/auth");

dotenv.config();

const MONGO = "mongodb://localhost:27017/social-media"; // Remove one slash after the port number

mongoose.connect(MONGO)
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
   
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })();
// //middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("Comman"));

app.use("/api/users",userRoute);
app.use("/api/auth",userAuth);

app.get("/",(req,res)=>{
    res.send("Welcome to my web server");
});
app.get("/users",(req,res)=>{
    res.send("Welcome to my users page");
});

app.listen(3000, () => {
    console.log("Backend is live");
});