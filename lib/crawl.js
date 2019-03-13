"use strict";

const request = require("request");
const cheerio = require("cheerio");
const util = require("util");

const promisifiedRequest = util.promisify(request);
const { portals, terms } = require("./search");

const crawl = async () => {
  console.time("TimeConsumed");
  const fullList = [];
  const promises = [];

  try {
    for (let site of portals) {
      promises.push(promisifiedRequest(site.url));
    }

    const responses = await Promise.all(promises);
    for (let i = 0; i < responses.length; i++) {
      const $ = cheerio.load(responses[i].body);
      // console.log("responses[i].body", responses[i].body);

      const jobs = [];
      const postings = $(portals[i].selector);

      if (!postings.length) {
        console.log(`No job postings found on ${portals[i].title}`);
      }

      postings.each((n, elem) => {
        let url = "";
        let jobTitle = "";

        if (portals[i].baseUrl) url = portals[i].baseUrl;

        switch ($(elem)[0].tagName) {
          case "a":
            // for Github Jobs
            url = $(elem).attr("href");

            if (
              $(elem)
                .find("h2")
                .text()
            ) {
              // for Creative City Berlin
              jobTitle = $(elem)
                .find("h2")
                .text();
            } else if ($(elem).find(".job-title")) {
              jobTitle = $(elem)
                .find(".job-title")
                .text();
            } else if ($(elem).find(".job-element__url-title-text")) {
              // Stepstone.de
              jobTitle = $(elem)
                .find(".job-element__url-title-text")
                .text();
            } else {
              jobTitle = $(elem).text();
            }
            break;

          case "h2": // for Berlin Startup Jobs
            url += $(elem)
              .find("a")
              .attr("href");
            jobTitle = $(elem).text();
            break;

          case "article": // for tbd
            url += $(elem)
              .find("a")
              .attr("href");
            jobTitle = $(elem)
              .find(".title")
              .text();
            break;

          case "div": // for Germany Startup Jobs
            jobTitle = $(elem).text();
            // console.log("jobTitle", jobTitle);
            break;
        }

        for (let term of terms) {
          const regex = new RegExp(term, "i");

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
              url
            });
            return;
          }
        }
      });

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
