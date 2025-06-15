const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Match your frontend port
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());
require('dotenv').config();
// Import your auth routes
const authRoutes = require('./routes/auth'); // Adjust path if needed

// Use the auth routes
app.use('/api', authRoutes); // All routes in auth.js will be prefixed with /api

// ... other routes and middleware
app.options('*', cors()); 
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
