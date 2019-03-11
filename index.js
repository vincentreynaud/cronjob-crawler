var request = require("request");
var cheerio = require('cheerio');

var START_URL = "http://www.taz.de";

request.get(START_URL, function(error, response, body) {
  console.time("TimeConsumed");
  console.log('body', body.slice(0, 200));
  console.timeEnd("TimeConsumed");
});
