"use strict";

require("dotenv").config();

const nodemailer = require("nodemailer");

const mail = async html => {
  // return new Promise((resolve, reject) => {

  // })
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PW
    }
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_RECEIVER,
    subject: `Job Offers from the Web ${Date.now()}`,
    text: html,
    html: html
  };

  transporter.verify((err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  const info = await transporter.sendMail(mailOptions);
  console.log(info.response);
  console.log("Message sent: %s", info.messageId);
};

module.exports = mail;
