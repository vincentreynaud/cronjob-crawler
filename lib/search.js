/**
 * monster.de, glassdoor, linkedin, xing, germany startup jobs
 * all retrun empty html
 */

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
    url: "http://www.jobsinberlin.eu/search?q=web",
    selector: ".body",
    linkSelector: ".job-link",
    titleSelector: ".job-link",
    companySelector: ".job-details-company"
  },
  {
    title: "stepstone-de",
    url:
      "https://www.stepstone.de/5/ergebnisliste.html?stf=freeText&ns=1&qs=%5B%7B%22id%22%3A%22419239%22%2C%22description%22%3A%22Berlin%22%2C%22type%22%3A%22geocity%22%7D%5D&companyID=0&cityID=419239&sourceOfTheSearchField=resultlistpage%3Ageneral&searchOrigin=Resultlist_top-search&ke=web&ws=Berlin&ra=30",
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
    title: "stackoverflow",
    url: "https://stackoverflow.com/jobs?l=berlin&d=20&u=Km",
    selector: ".-job-summary",
    linkSelector: ".-title h2 a",
    titleSelector: ".-title h2 a",
    companySelector: ".-company span:first-child"
  },
  {
    title: "get-in-it",
    url: "https://www.get-in-it.de/jobsuche",
    baseUrl: "https://www.get-in-it.de",
    selector: ".jobsearch-entry-card",
    titleSelector: ".jobsearch-entry-job-title",
    companySelector: ".jobsearch-entry-company-title"
  },
  {
    title: "moberries",
    url: "https://www.moberries.com/jobs/search?q=web%20berlin", // &page=2
    baseUrl: "https://www.moberries.com",
    selector: ".media-body",
    linkSelector: ".card-link",
    titleSelector: ".card-link .media-heading",
    companySelector: "a small.primary"
  }
  // {
  //   title: "remote-ok",
  //   url: "https://remoteok.io/remote-dev+react+front-end-jobs",
  //   selector: ".job .company.position.company_and_position",
  //   linkSelector: ".preventLink",
  //   titleSelector: ".preventLink h2",
  //   companySelector: ".companyLink h3"
  // }
];

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
