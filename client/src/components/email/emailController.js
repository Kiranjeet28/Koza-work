const expressAsyncHandler = require("express-async-handler");
const transporter = require("./mainEmail")

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { service, email, phone, date } = req.body;

  if (!service || !email || !phone || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(service, email, phone, date);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Book an Appointment",
    text: `Customer ${service} wants to book an appointment for ${date}. Customer Mobile No: ${phone}`,
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

module.exports = { sendEmail };
