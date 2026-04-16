const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const receiverEmail = process.env.RECEIVER_EMAIL || 'Brown.bree900@gmail.com';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/submit-lead', async (req, res) => {
  const { name, phone, email, goals, social, 'start-date': startDate } = req.body;

  if (!name || !phone || !email || !goals || !startDate) {
    return res.status(400).send('Please complete all required fields.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Lead Capture <${process.env.EMAIL_USER}>`,
    to: receiverEmail,
    subject: 'New Lead Submission from Your Website',
    html: `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Social Media:</strong> ${social || 'N/A'}</p>
      <p><strong>Ready to start:</strong> ${startDate}</p>
      <p><strong>Goals &amp; Desires:</strong></p>
      <p>${goals.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.redirect('/thank-you.html');
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).send('Error sending lead. Please try again later.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
