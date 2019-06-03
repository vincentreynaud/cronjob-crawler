"use strict";

/**
 * - cron job https://www.npmjs.com/package/node-cron
 * - move new offers to top
 * - check gmail plugin
 * - use mLab to save to database
 * - check if the pages respond with html or are a SPA
 * - deploy to now
 */

const fs = require("fs");
const pug = require("pug");
const cron = require("node-cron");
const crawl = require("./crawl");
const inspect = require("./lib/inspect");
const mail = require("./mail");

const interval = "0 9 * * 1";
// https://crontab.guru

// Start job to compare newer jobs
// const previousJobs = require("../jobs.json");

async function run() {
  const content = await crawl();
  // Save content to json file
  // fs.writeFileSync("./jobs.json", JSON.stringify(content));

  // loop through content

  const html = pug.renderFile("./src/lib/email.pug", { content });
  fs.writeFileSync("./src/lib/email.html", html);
  console.log("HTML job list ready");

  // // Check content of fetched websites
  // const inspectBody = await inspect();
  // for (let i = 0; i < inspectBody.length; i++) {
  //   fs.writeFileSync(
  //     `./src/lib/inspect/inspect-body-${i + 1}.html`,
  //     inspectBody[i]
  //   );
  // }
  // console.log("HTML body inspect files ready");

  await mail(html);
}

run();
console.log(process.env.MAIL_USER);

cron.schedule(interval, () => {
  console.log("Cronjob is running: ", interval);
  run();
});
