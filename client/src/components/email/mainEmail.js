const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' for Gmail SMTP server
  auth: {
    user: process.env.REACT_APP_EMAIL, // Your Gmail email address
    pass: process.env.REACT_APP_EMAIL_PASSWORD, // Your Gmail email password or App Password
  },
});
export default transporter;