const displayWelcomeBox = require('./displayWelcomeBox');
const displaySelectLangage = require('./displaySelectLangage');
const displayLoading = require('./displayLoading');
const scrapingMounts = require('./scraping/mounts');

(async () => {
    displayWelcomeBox();

    const langage = await displaySelectLangage();

    const spinner = displayLoading();

    const dragoturkeys = await scrapingMounts(langage);

    dragoturkeys ? spinner.succeed('Done!') : spinner.fail('An error has occurred...');
})();
