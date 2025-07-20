const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Task Tracker API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
