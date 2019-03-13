"use strict";

const fs = require("fs");
const util = require("util");

const logger = message => {
  const stream = fs.createWriteStream("cron.log", {
    flags: "a" // appends to the file
  });
  stream.write(`JobCron ${new Date().toISOString()} ${message} \n`);
};

module.exports = logger;
