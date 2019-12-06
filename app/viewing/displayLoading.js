const ora = require('ora');

const displayLoading = () => {
    const spinner = ora({
        text: 'Please wait during the scrap, this operation can take a few minutes.',
        color: 'cyan',
    }).start();

    return spinner;
};

module.exports = displayLoading;
