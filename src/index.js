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
const crawl = require("./crawl");
const inspect = require("./lib/inspect/inspect");
const mail = require("./mail");

const previousJobs = require("../jobs.json");

(async () => {
  const content = await crawl();
  // save content to json file
  // fs.writeFileSync("./jobs.json", JSON.stringify(content)); //

  // loop through content

  console.log("content", content[1].jobs);

  const html = pug.renderFile("./src/lib/email.pug", { content });
  fs.writeFileSync("./src/lib/email.html", html);
  console.log("HTML job list ready");

  /*
  const inspectBody = await inspect();
  for (let i = 0; i < inspectBody.length; i++) {
    fs.writeFileSync(
      `./src/lib/inspect/inspect-body-${i + 1}.html`,
      inspectBody[i]
    );
  }
  console.log("HTML body inspect files ready");
  */

  // await mail(html);
})();
