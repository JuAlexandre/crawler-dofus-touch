const displayWelcomeBox = require('./displayWelcomeBox');
const displaySelectLangage = require('./displaySelectLangage');
const displaySelectOption = require('./displaySelectOption');
const displayLoading = require('./displayLoading');
const scrapingMounts = require('./scraping/mounts');

(async () => {
    displayWelcomeBox();
    const langage = await displaySelectLangage();
    const option = await displaySelectOption();

    const spinner = displayLoading();

    switch(option) {
        case 'downloadDragoturkeysPictures':
            // TODO: Start a function to download all pictures.
            break;
        case 'getAllDragoturkeysData':
            const dragoturkeys = await scrapingMounts(langage);
            dragoturkeys ? spinner.succeed('Done!') : spinner.fail('An error has occurred...');
            console.log(dragoturkeys);
            break;
        default:
            spinner.stop();
            console.log('Bye!');
            process.exit();
            break;
    }
})();
