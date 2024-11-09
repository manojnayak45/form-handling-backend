const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://iammanojnayak_2003:Manoj%402003@cluster0.6nmc6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  app.use(cors());



// Routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
