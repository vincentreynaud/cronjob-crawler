"use strict";

/**
 * - cron job https://www.npmjs.com/package/node-cron
 * - check gmail plugin
 * - use mLab to save to database
 * - check if the pages respond with html or are a SPA
 * - deploy to now
 */

const crawl = require("./lib/crawl");
const mail = require("./lib/mail");

(async () => {
  const content = await crawl();

  let str = "";
  console.log("content", content);
  content.forEach(site => {
    str += "=================== \n \n";
    site.forEach(posting => {
      str += `${posting.title}: \n`;
      str += `${posting.url} \n`;
      str += `\n`;
    });
  });

  // console.log("str", str);

  // await mail(str);
})();
