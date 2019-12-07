const puppeteer = require('puppeteer');

const constants = require('../config/constants');
const getBasicData = require('./getBasicData');

const scrapingMounts = async langage => {
    let URL = langage === 'FR' ? constants.MOUNTS_URL.FR : constants.MOUNTS_URL.EN;

    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle2' });

    const data = await getBasicData(page);

    await browser.close();

    return data;
};

module.exports = scrapingMounts;
