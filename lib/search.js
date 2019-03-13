exports.portals = [
  {
    title: "tbd",
    baseUrl: "https://www.tbd.community",
    url: "https://www.tbd.community/en/jobs?r=206#search",
    selector: ".job.card",
    linkSelector: "a",
    titleSelector: ".title",
    companySelector: ".pm-14.grey.fix-h24"
  },
  {
    title: "berlin-startup-jobs",
    url: "http://berlinstartupjobs.com/engineering",
    selector: ".product-listing-item",
    linkSelector: ".product-listing-h2 a",
    titleSelector: ".product-listing-h2 a",
    companySelector: ".category-tag a:first-child"
  },
  {
    title: "creative-city-berlin",
    baseUrl: "https://www.creative-city-berlin.de",
    url: "https://www.creative-city-berlin.de/en/jobs/all/?job_sector=7",
    selector: ".job-list .content",
    titleSelector: ".text h2"
  },
  {
    title: "github-jobs",
    url: "https://jobs.github.com/positions?description=&location=Berlin",
    selector: ".job .title",
    linkSelector: "h4 > a",
    titleSelector: "h4 > a",
    companySelector: ".source .company"
  },
  {
    title: "jobs-in-berlin",
    url: "http://www.jobsinberlin.eu/",
    selector: ".body",
    linkSelector: ".job-link",
    titleSelector: ".job-link",
    companySelector: ".job-details-company"
  },
  {
    title: "stepstone-de",
    url:
      "https://www.stepstone.de/5/ergebnisliste.html?searchTypeFrom=detailedSearch&searchOrigin=Detailed-Search_detailed-search&newsearch=1&Function=1005003&Function=1023000&Function=1024000&Country=50021&Country=50012&Country=50013&Country=50014&Country=50015&keyword=&freetext_exact=false&freetext_all_words=false",
    selector: ".job-element__body",
    linkSelector: ".job-element__url",
    titleSelector: ".job-element__url-title-text",
    companySelector: ".job-element__body__company"
  },
  {
    title: "indeed-de",
    url: "https://de.indeed.com/Jobs?q=web&l=Berlin&limit=100",
    selector: ".jobsearch-SerpJobCard",
    linkSelector: ".jobtitle",
    titleSelector: ".jobtitle",
    companySelector: ".company"
  },
  {
    title: "remote-ok",
    url: "https://remoteok.io/remote-dev+react+front-end-jobs",
    selector: ".job .company.position.company_and_position",
    linkSelector: ".preventLink",
    titleSelector: ".preventLink h2",
    companySelector: ".companyLink h3"
  }
];

// github jobs, etc.

exports.terms = [
  "software",
  "web",
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
    title: "xing",
    url:
      "https://www.xing.com/jobs/search?utf8=%E2%9C%93&nrs=1&sc_o=jobs_search_button&location=berlin&keywords=web&sort=date",
    selector: ".result-result-container-d527f6c7",
    linkSelector: "a",
    titleSelector: "h2 div",
    companySelector: "result-result-subtitle-3f97fea9"
  },

  // address doesn't return job offers, but html working
  {
    title: "germany-startup-jobs",
    url: "http://www.germanystartupjobs.com",
    selector: ".job_listing a",
    titleSelector: ".job-title"
  }
 */
