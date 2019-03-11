const request = require("request");
const cheerio = require('cheerio');
const util = require('util');
const promisifiedRequest = util.promisify(request);

const START_URL = "http://www.taz.de";

(async() => {
  const response = await promisifiedRequest(START_URL)
  console.time("TimeConsumed");
  console.log('response', response.body.slice(0, 200));
  console.timeEnd("TimeConsumed");  
})()

