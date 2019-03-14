"use strict";

const request = require("request");
const cheerio = require("cheerio");
const util = require("util");

const promisifiedRequest = util.promisify(request);
const logger = require("./logger");
const { portals, terms } = require("./search");

const crawl = async () => {
  console.time("TimeConsumed");
  const promises = [];
  const fullList = [];

  try {
    for (let site of portals) {
      promises.push(promisifiedRequest(site.url));
    }
    const responses = await Promise.all(promises);

    for (let i = 0; i < responses.length; i++) {
      const $ = cheerio.load(responses[i].body);

      const postings = $(portals[i].selector);
      const jobs = [];

      if (!postings.length)
        logger(`No job postings found on ${portals[i].title}`);

      postings.each((n, elem) => {
        let url = "";
        let jobTitle = "";
        let company = " — ";

        if (portals[i].baseUrl) url = portals[i].baseUrl;

        // parse links
        if (!portals[i].linkSelector) {
          url += $(elem).attr("href");
        } else {
          url += $(elem)
            .find(portals[i].linkSelector)
            .attr("href");
        }

        // parse job titles
        if (!portals[i].titleSelector) {
          // taking the parent element's text
          jobTitle = $(elem).text();
        } else {
          jobTitle = $(elem)
            .find(portals[i].titleSelector)
            .text();
        }

        // parse companies
        if (portals[i].companySelector) {
          company += $(elem)
            .find(portals[i].companySelector)
            .text();
        }

        for (let term of terms) {
          const regex = new RegExp(term, "i", "g");

          //debug
          if (typeof jobTitle !== "string") {
            console.log("jobTitle is not a string");
            return;
          } else if (typeof jobTitle === "undefined") {
            console.log("jobTitle is undefined");
            return;
          } else if (jobTitle === "") {
            console.log("jobTitle is an empty string");
            return;
          }

          if (jobTitle.match(regex)) {
            jobs.push({
              title: jobTitle,
              company,
              url
            });
            return;
          }
        }
      });

      // check if arr is left empty after filtering
      if (!jobs.length) {
        jobs.push({
          title: `No jobs found on ${portals[i].url}`,
          url: null
        });
      }

      fullList[i] = {
        site: portals[i].title,
        jobs
      };
    }
  } catch (err) {
    throw new Error(err);
  }

  console.timeEnd("TimeConsumed");
  return fullList;
};

module.exports = crawl;
