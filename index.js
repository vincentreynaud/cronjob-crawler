var request = require("request");
var cheerio = require('cheerio');
const util = require('util');
const promisifiedRequest = util.promisify(request);

var START_URL = "http://www.taz.de";

promisifiedRequest(START_URL).then(response => {
  console.time("TimeConsumed");
  console.log('body', response.body.slice(0, 200));
  console.timeEnd("TimeConsumed");
});
