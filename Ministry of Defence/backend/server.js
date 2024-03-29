const express = require("express");
const cors = require("cors");

const app = express();

const categoriesRouter = require('./routs/categoryRouters');

app.use(cors()); // Enable CORS for all routes

// Middleware
app.use(express.json());

// Routes
app.use('/api', categoriesRouter); // Corrected path

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});




