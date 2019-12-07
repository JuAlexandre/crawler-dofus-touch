const displayWelcomeBox = require('./viewing/displayWelcomeBox');
const displayQuestions = require('./viewing/displayQuestions');
const displayLoading = require('./viewing/displayLoading');
const scrapingMounts = require('./scraping/mounts');

(async () => {
    displayWelcomeBox();
    const userAnswers = await displayQuestions();
    const spinner = displayLoading();

    switch(userAnswers.option) {
        case 'downloadDragoturkeysPictures':
            // TODO: Start a function to download all pictures.
            break;
        case 'getAllDragoturkeysData':
            const dragoturkeys = await scrapingMounts(userAnswers.langage);
            dragoturkeys ? spinner.succeed('Done!') : spinner.fail('An error has occurred...');
            break;
        default:
            spinner.stop();
            console.log('Bye!');
            process.exit();
            break;
    }

    debugger;
})();
