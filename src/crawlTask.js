const crawlUrls = require('./crawler');
const { getDepth } = require("./utils/depthConfig");

async function crawl(paths, http) {
  const depth = getDepth(); // Get the depth value configuration
  const links = await crawlUrls(paths, depth, http);
}

crawl(["htmls/1.html"], false)
  .then(() => crawl(['htmls/2.html', 'htmls/3.html'], false));
