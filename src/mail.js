"use strict";

require("dotenv").config();

const nodemailer = require("nodemailer");
const logger = require("./lib/logger");
const MailError = require("./lib/MailError");

const dateRaw = new Date();
const date = dateRaw.toLocaleString("de-De", {
  day: "numeric",
  month: "short",
  year: "numeric"
});

const mail = async html => {
  try {
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
      from: `"Cron Job Crawler" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `Job Offers from the Web — ${date}`,
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
    logger(`Message sent: ${info.messageId}`);
    logger(`Response: ${info.response}`);
  } catch (err) {
    throw new MailError(err);
  }
};

module.exports = mail;
