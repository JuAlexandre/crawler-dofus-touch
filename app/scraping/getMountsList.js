const puppeteer = require('puppeteer');

const getMountsList = async URL => {
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle2' });

    await page.addScriptTag({ path: './app/utils/getPictureUrl.js' });
    await page.addScriptTag({ path: './app/config/constants.js' });
    
    const data = await page.evaluate(() => {
        const dragoturkeys = [];

        document.querySelectorAll('tbody > tr').forEach(async line => {
            const dragoturkey = {
                name: line.querySelector('td:nth-child(2) > span[class="ak-linker ak-widgetcreated"] > a').innerText,
                pictureUrl: getPictureUrl(line.querySelector('div[class="ak-entitylook"]').getAttribute('style', 'background')),
                detailsLink: constants.BASE_URL + line.querySelector('td:nth-child(2) > span[class="ak-linker ak-widgetcreated"] > a').getAttribute('href'),
            };

            dragoturkeys.push(dragoturkey);
        });

        return dragoturkeys;
    });

    await browser.close();

    return data;
};

module.exports = getMountsList;
