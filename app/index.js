const displayWelcomeBox = require('./displayWelcomeBox');
const displaySelectLangage = require('./displaySelectLangage');
const scrapingMounts = require('./scraping/mounts');

(async () => {
    displayWelcomeBox();

    const langage = await displaySelectLangage();

    const dragoturkeys = await scrapingMounts(langage);

    console.log(dragoturkeys);
})();
