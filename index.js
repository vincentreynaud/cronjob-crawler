"use strict";

/**
 * - cron job https://www.npmjs.com/package/node-cron
 * - check gmail plugin
 * - use mLab to save to database
 * - check if the pages respond with html or are a SPA
 * - deploy to now
 */

const pug = require("pug");
const crawl = require("./lib/crawl");
const mail = require("./lib/mail");
const fs = require("fs");

(async () => {
  const content = await crawl();

  const html = pug.renderFile("./lib/email.pug", { content });
  fs.writeFileSync("./lib/email.html", html);

  // await mail(html);
})();
