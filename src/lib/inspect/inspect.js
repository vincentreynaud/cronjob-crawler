"use strict";

const request = require("request");
const util = require("util");

const promisifiedRequest = util.promisify(request);
const { portals } = require("../search");

const inspect = async () => {
  console.time("TimeConsumed");
  const promises = [];
  const bodies = [];

  try {
    for (let site of portals) {
      promises.push(promisifiedRequest(site.url));
    }
    const responses = await Promise.all(promises);

    for (let i = 0; i < responses.length; i++) {
      const body = responses[i].body;
      bodies.push(body);
    }
  } catch (err) {
    throw new Error(err);
  }

  console.timeEnd("TimeConsumed");
  return bodies;
};

module.exports = inspect;
