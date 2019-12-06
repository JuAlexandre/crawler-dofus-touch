const prompts = require('prompts');

const displaySelectOption = async () => {
    const { option } = await prompts({
        type: 'select',
        name: 'option',
        message: 'What do you want to do ?',
        choices: [
            { title: 'Download dragoturkeys pictures', value: 'downloadDragoturkeysPictures' },
            { title: 'Get all dragoturkeys data', value: 'getAllDragoturkeysData' },
        ],
    });

    return option;
};

module.exports = displaySelectOption;
