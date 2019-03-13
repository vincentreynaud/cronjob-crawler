"use strict";

const request = require("request");
const cheerio = require("cheerio");
const util = require("util");

const promisifiedRequest = util.promisify(request);
const { portals, terms } = require("./search");

const crawl = async () => {
  console.time("TimeConsumed");
  const fullList = [];
  let promises = [];

  try {
    for (let site of portals) {
      promises.push(promisifiedRequest(site.url));
    }

    const responses = await Promise.all(promises);

    for (let i = 0; i < responses.length; i++) {
      const $ = cheerio.load(responses[i].body);

      const jobs = [];
      const postings = $(portals[i].selector);

      if (!postings.length) {
        console.log(`No job postings found on ${portals[i].title}`);
        return;
      }

      postings.each((n, elem) => {
        let url = "";
        let jobTitle = "";

        if (portals[i].baseUrl) url = portals[i].baseUrl;

        switch ($(elem)[0].tagName) {
          case "a": // for Creative City Berlin
            url += $(elem)[0].attribs.href;
            jobTitle = $(elem)
              .find("h2")
              .text();
            break;

          case "h2": // for Berlin Startup Jobs
            url += $(elem).find("a")[0].attribs.href;
            jobTitle = $(elem).text();
            break;

          case "article": // for tbd
            url += $(elem).find("a")[0].attribs.href;
            jobTitle = $(elem)
              .find(".title")
              .text();
            break;
        }

        for (let term of terms) {
          const regex = new RegExp(term, "i");

          if (
            typeof jobTitle !== "string" ||
            typeof jobTitle === "undefined" ||
            jobTitle === ""
          ) {
            console.log("some weird stuff here");
            return;
          }

          if (jobTitle.match(regex)) {
            jobs.push({
              title: jobTitle,
              url: url
            });
          }
        }
      });

      fullList[i] = jobs;
    }
  } catch (err) {
    throw new Error(err);
  }

  console.timeEnd("TimeConsumed");
  return fullList;
};

module.exports = crawl;
