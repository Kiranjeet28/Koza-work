const expressAsyncHandler = require("express-async-handler");
const transporter = require("./mainEmail")

const contactEmail = expressAsyncHandler(async (req, res) => {
  const { Subject, email, phone, Message } = req.body;

  if (!Subject || !email || !phone || !Message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(Subject, email, phone, Message);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `${Subject}`,
    text: `${Message}. Customer Mobile No: ${phone}`,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

module.exports = { contactEmail };
