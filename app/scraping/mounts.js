const puppeteer = require('puppeteer');

const constants = require('../config/constants');

const scrapingMounts = async langage => {
    let URL = langage === 'FR' ? constants.MOUNTS_URL.FR : constants.MOUNTS_URL.EN;

    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle2' });

    await page.addScriptTag({ path: './app/utils/getPictureUrl.js' });

    let results = await page.evaluate(() => {
        const dragoturkeys = [];
        let dragoturkeyId = 1;

        document.querySelectorAll('tbody > tr')
            .forEach(line => {
                const dragoturkey = {
                    id: dragoturkeyId,
                    name: line.querySelector('td:nth-child(2) > span[class="ak-linker ak-widgetcreated"] > a').innerText,
                    pictureUrl: getPictureUrl(line.querySelector('div[class="ak-entitylook"]').getAttribute('style', 'background')),
                    generation: parseInt(line.querySelector('td:nth-child(3)').innerText),
                };

                dragoturkeys.push(dragoturkey);
                dragoturkeyId++;
            });

        return dragoturkeys;
    });

    await browser.close();

    return results;
};

module.exports = scrapingMounts;
