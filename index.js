/**
 * - surf the web and find job offering-pages and investigate their title-selector
 * check if the pages respond with html or are a SPA.
 * If they are just javascript, dont use them - its way harder to parse their content.
 * just curl the domain and check if you can see the Job in the returned html
 * if the page returns good ol' html, investigate the selector for the title element
 * ...
 */

"use strict";

const request = require("request");
const cheerio = require("cheerio");
const util = require("util");

const promisifiedRequest = util.promisify(request);
const { portals, terms } = require("./lib/search");

(async () => {
  console.time("TimeConsumed");
  const fullList = {};

  let promises = [];
  for (let site of portals) {
    promises.push(promisifiedRequest(site.url));
  }

  const responses = await Promise.all(promises);

  for (let i = 0; i < responses.length; i++) {
    const $ = cheerio.load(responses[i].body);

    const jobs = [];
    const postings = $(portals[i].selector);

    if (postings.length <= 0) {
      console.log(`No job postings found on ${portals[i].title}`);
      return;
    }

    postings.each((i, elem) => {
      const jobTitle = $(elem).text();

      for (let term of terms) {
        term = new RegExp(term, "i");

        if (
          typeof jobTitle !== "string" ||
          typeof jobTitle === "undefined" ||
          jobTitle === ""
        ) {
          console.log("some weird stuff here");
          return;
        }

        if (jobTitle.match(term)) {
          jobs[i] = jobTitle;
        }
      }
    });

    fullList[portals[i].title] = jobs;
    console.log(fullList);
    // console.log("Site:", site.title);
    // console.log("Found jobs: ", jobs);

    //TODO save found jobs to MLAB mongo
    //TODO send a mail with new jobs and already found jobs to your self
  }

  // Looping through sites
  for (let site of portals) {
  }

  console.timeEnd("TimeConsumed");
})();

//TODO use https://www.npmjs.com/package/node-cron to run the crawler in a regular interval
