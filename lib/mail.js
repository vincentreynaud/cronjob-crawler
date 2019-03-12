"use strict";

require("dotenv").config();

const nodemailer = require("nodemailer");

const mail = async content => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Job Offers from the Web`,
    text: content
  };

  transporter.verify((err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    } // -> can't check for response?

    transporter.close();
  });
};

module.exports = mail;
