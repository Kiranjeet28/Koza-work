const express = require("express");
const cors = require("cors");
const emailRoutes = require("./email/emailRoute");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Use the routes
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
