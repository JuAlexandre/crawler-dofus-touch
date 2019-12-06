const prompts = require('prompts');

const displaySelectLangage = async () => {
    const { langage } = await prompts({
        type: 'select',
        name: 'langage',
        message: 'In which language do you want the results?',
        choices: [
            { title: 'English', value: 'EN' },
            { title: 'French', value: 'FR' },
        ],
    });

    return langage;
};

module.exports = displaySelectLangage;
