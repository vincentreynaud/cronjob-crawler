const crawl = require("./lib/crawl");
const mail = require("./lib/mail");

//TODO use https://www.npmjs.com/package/node-cron to run the crawler in a regular interval

(async () => {
  const content = await crawl();

  let str = "";
  console.log("content", content);
  content.forEach(site => {
    str += "=================== \n \n";
    site.forEach(posting => {
      str += `${posting.title}: \n`;
      str += `${posting.url} \n`;
      str += `\n`;
    });
  });

  // console.log("str", str);

  // await mail(str);
})();
