const express = require("express");
const router = express.Router();

const { sendEmail } = require("./emailController");
const {contactEmail} = require("./contactEmail")
router.post("/sendEmail", sendEmail);
router.post("contactEmail", contactEmail)

module.exports = router;