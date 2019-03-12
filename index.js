const request = require("request");
const cheerio = require('cheerio');
const util = require('util');
const promisifiedRequest = util.promisify(request);

//IIFE
(async () => {
  const list = [
    {link: 'https://www.tbd.community/en/jobs?r=206#search', selector: ".job.card .title"},
    {link: 'http://berlinstartupjobs.com/engineering', selector: ".product-listing-h2 a"},
    // TODO surf the web and find job offering-pages and investigate their title-selector
    // check if the pages respond with html or are a SPA. If they are just javascript, dont use them - its way harder to parse their content.
    // just curl the domain and check if you can see the Job in the returned html
    // if the page returns good ol' html, investigate the selector for the title element
    // ...
  ]
  const terms = [
    'software developer',
    'software entwickler',
    'developer'
    // TODO add all possible job titles you wanna look for
  ]
  //TODO optimze this loop to use multiple parallel requests instead of the current seriell way
  console.time("TimeConsumed");
  for (let site of list) {
    const response = await promisifiedRequest(site.link)

    const jobs = [];
    const $ = cheerio.load(response.body)
    $(site.selector).each(function (i, elem) {
      jobs[i] = $(this).text();
    });
    //TODO loop over terms and find your jobtitles by term
    for (let term of terms){

    }
    console.log('Found jobs: ', jobs);
    //TODO save found jobs to MLAB mongo
    //TODO send a mail with new jobs and already found jobs to your self
  }
  console.timeEnd("TimeConsumed");
})()

//TODO use https://www.npmjs.com/package/node-cron to run the crawler in a regular interval