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

const portals = [
  {
    title: "tbd",
    url: "https://www.tbd.community/en/jobs?r=206#search",
    selector: ".job.card .title"
  },
  {
    title: "berlin-startup-jobs",
    url: "http://berlinstartupjobs.com/engineering",
    selector: ".product-listing-h2 a"
  },
  {
    title: "linkedin",
    url:
      "https://www.linkedin.com/jobs/search?location=Berlin%20Area%2C%20Germany&locationId=de%3A4944&pageNum=0&position=1",
    selector: ".listed-job-posting__title"
  }
];

const terms = [
  "software",
  "entwickler",
  "frontend",
  "front-end",
  "front end",
  "developer",
  "engineer"
];

(async () => {
  console.time("TimeConsumed");
  const fullList = {};
  // for (let site of portals) {
  //   promises.push(promisifiedRequest(site.url));
  // }

  // Looping through sites
  for (let site of portals) {
    const response = await promisifiedRequest(site.url);
    const $ = cheerio.load(response.body);

    const jobs = [];
    const postings = $(site.selector);

    if (postings.length <= 0) {
      console.log(`No job postings found on ${site.title}`);
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
          return;
        }

        if (jobTitle.match(term)) {
          jobs[i] = jobTitle;
        }
      }
    });

    fullList[site.title] = jobs;
    console.log(fullList);
    // console.log("Site:", site.title);
    // console.log("Found jobs: ", jobs);

    //TODO save found jobs to MLAB mongo
    //TODO send a mail with new jobs and already found jobs to your self
  }

  console.timeEnd("TimeConsumed");
})();

//TODO use https://www.npmjs.com/package/node-cron to run the crawler in a regular interval
