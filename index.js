const request = require("request");
const cheerio = require('cheerio');
const util = require('util');
const promisifiedRequest = util.promisify(request);

const START_URL = "http://www.taz.de";

promisifiedRequest(START_URL).then(response => {
  console.time("TimeConsumed");
  console.log('response', response.body.slice(0, 200));
  console.timeEnd("TimeConsumed");
});
