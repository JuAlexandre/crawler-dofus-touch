const prompts = require('prompts');

const displaySelectLangage = async () => {
    const { langage } = await prompts({
        type: 'select',
        name: 'langage',
        message: 'Choose your langage:',
        choices: [
            { title: 'English', value: 'EN' },
            { title: 'French', value: 'FR' },
        ],
    });

    return langage;
};

module.exports = displaySelectLangage;
