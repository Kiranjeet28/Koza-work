const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const emailRoutes = require("./email/emailRoute");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Use the routes
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
