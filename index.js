const request = require("request");
const cheerio = require('cheerio');
const util = require('util');
const promisifiedRequest = util.promisify(request);

const START_URL = "http://www.taz.de";

//IIFE
(async() => {
  const response = await promisifiedRequest(START_URL)
  console.time("TimeConsumed");
  const $ = cheerio.load(response.body)
  //fetch all titles from articles and concatinate them to a string
  console.log($('a.article h3').text())

  //TODO find selector and `each` over it https://cheerio.js.org/#each-functionindex-element-
  console.timeEnd("TimeConsumed");  
})()