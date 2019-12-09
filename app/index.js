const displayWelcomeBox = require('./viewing/displayWelcomeBox');
const displayQuestions = require('./viewing/displayQuestions');
const displayLoading = require('./viewing/displayLoading');
const scrapingMounts = require('./scraping/mounts');
const setPictureSize = require('./utils/setPictureSize');
const downloadMountsPictures = require('./utils/downloadMountsPictures');

(async () => {
    displayWelcomeBox();
    const userAnswers = await displayQuestions();
    const spinner = displayLoading();
    let dragoturkeys = []

    switch(userAnswers.option) {
        case 'downloadDragoturkeysPictures':
            const errors = [];
            
            dragoturkeys = await scrapingMounts(userAnswers.langage, 'list');
            dragoturkeys.forEach(async dragoturkey => {
                dragoturkey.pictureUrl = await setPictureSize(dragoturkey.pictureUrl, userAnswers.pictureSize);
                const error = downloadMountsPictures(dragoturkey.pictureUrl, `./download/${dragoturkey.name}.png`);
                if (error) {
                    errors.push(error);
                }
            });

            if (errors.length !== 0) {
                console.log(errors);
                spinner.fail('An error has occurred...');
            } else {
                spinner.succeed('Done!');
            }

            break;
        case 'getAllDragoturkeysData':
            dragoturkeys = await scrapingMounts(userAnswers.langage, 'all');
            dragoturkeys ? spinner.succeed('Done!') : spinner.fail('An error has occurred...');
            console.log(dragoturkeys);
            break;
        default:
            spinner.stop();
            console.log('Bye!');
            process.exit();
            break;
    }

    debugger;
})();
