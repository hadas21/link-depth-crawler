const scrapeLinks = require("./utils/scraper");
const store = require("./store");
const logger = require("./utils/logger");

module.exports = async function crawlUrls(paths, depth, http) {

  const visited = new Set();
  const queue = [...paths.map((path) => ({ path, depth: 0 }))];

  while (queue.length > 0) {
    const { path, depth: currentDepth } = queue.shift();

    visited.add(path);

    if (currentDepth <= depth) {

      if (currentDepth === depth) {
        const links = await scrapeLinks(path, http, 0);
        store.saveResult(path, links);

      } else {
        const links = await scrapeLinks(path, http);
        store.saveResult(path, links);
        for (const link of links) {
          queue.push({ path: link, depth: currentDepth + 1 });
        }
      }
    }
  }
   logger.logResults(store.getResult());
};
