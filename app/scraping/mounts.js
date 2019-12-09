const constants = require('../config/constants');
const getMountsList = require('./getMountsList');
const getMountsDetails = require('./getMountsDetails');

const scrapingMounts = async (langage, researchType) => {
    let URL = langage === 'FR' ? constants.MOUNTS_URL.FR : constants.MOUNTS_URL.EN;

    const dragoturkeysWithoutDetails = await getMountsList(URL);

    const dragoturkeys = researchType === 'all' ? await getMountsDetails(dragoturkeysWithoutDetails) : dragoturkeysWithoutDetails ;

    return dragoturkeys;
};

module.exports = scrapingMounts;
