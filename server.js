const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const tasks_routes = require('./routes/tasks_routes')

// Load environment variables from .env file
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MongoDB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Use API routes with prefix /api
app.use('/api/auth', authRoutes);
app.use('/api/tasks', tasks_routes)
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
