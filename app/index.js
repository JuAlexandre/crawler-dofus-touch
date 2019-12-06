const scrapingMounts = require('./scraping/mounts');

(async () => {
    const dragoturkeys = await scrapingMounts('EN');
})();
