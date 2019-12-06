const boxen = require('boxen');
const chalk = require('chalk');

const package = require('../../package.json');

const displayWelcomeBox = () => {
    const welcomeMessage = chalk.white('Welcome on');
    const appName = chalk.green.bold('Dofus Touch Crawler');
    const appVersion = chalk.gray(`v${package.version}`);

    const welcomeBox = boxen(
        `${welcomeMessage} ${appName} - ${appVersion}`,
        { padding: 1, borderStyle: 'round' },
    )

    console.log(welcomeBox);
};

module.exports = displayWelcomeBox;
