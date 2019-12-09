const prompts = require('prompts');

const displayQuestions = async () => {
    const userAnswers = await prompts([
        {
            type: 'select',
            name: 'langage',
            message: 'In which language do you want the results?',
            choices: [
                { title: 'English', value: 'EN' },
                { title: 'French', value: 'FR' },
            ],
        },
        {
            type: 'select',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                { title: 'Download dragoturkeys pictures', value: 'downloadDragoturkeysPictures' },
                { title: 'Get all dragoturkeys data', value: 'getAllDragoturkeysData' },
            ],
        },
    ], { onCancel: () => false });

    return userAnswers;
};

module.exports = displayQuestions;
