exports.portals = [
  // {
  //   title: "tbd",
  //   baseUrl: "https://www.tbd.community",
  //   url: "https://www.tbd.community/en/jobs?r=206#search",
  //   selector: ".job.card"
  // },
  // {
  //   title: "berlin-startup-jobs",
  //   url: "http://berlinstartupjobs.com/engineering",
  //   selector: ".product-listing-h2"
  // },
  // {
  //   title: "creative-city-berlin",
  //   baseUrl: "https://www.creative-city-berlin.de",
  //   url: "https://www.creative-city-berlin.de/en/jobs/all/?job_sector=7",
  //   selector: ".job-list .content"
  // },
  {
    title: "github-jobs",
    url: "https://jobs.github.com/positions?description=&location=Berlin",
    selector: ".job .title a"
  },
  {
    title: "jobs-in-berlin",
    url: "http://www.jobsinberlin.eu/",
    selector: ".job-link"
  },
  {
    title: "germany-startup-jobs",
    url: "http://www.germanystartupjobs.com/",
    selector: ".job-title"
  }
  // {
  //   title: "stepstone-de",
  //   url:
  //     "https://www.stepstone.de/5/ergebnisliste.html?searchTypeFrom=detailedSearch&searchOrigin=Detailed-Search_detailed-search&newsearch=1&Function=1005003&Function=1023000&Function=1024000&Country=50021&Country=50012&Country=50013&Country=50014&Country=50015&keyword=&freetext_exact=false&freetext_all_words=false",
  //   selector: ".job-element__url"
  // }
];

// github jobs, etc.

exports.terms = [
  "software",
  "entwickler",
  "frontend",
  "front-end",
  "front end",
  "fullstack",
  "full-stack",
  "full stack",
  "developer",
  "frontend-developer",
  "engineer"
];

/** trash?
  {
    title: "monster-de",
    url: "https://www.monster.de/jobs/suche/?where=Berlin__2C-Berlin&cy=DE",
    selector: ".title a"
  },
  {
    title: "glassdoor",
    url: "https://www.glassdoor.de/Job/berlin-jobs-SRCH_IL.0,6_IC2622109.htm?",
    selector: ".jobLink"
  },
  {
    title: "remote-ok",
    url: "https://remoteok.io/remote-dev+react+front-end-jobs",
    selector: ".job .company.position .preventLink"
  },
 */
