const puppeteer = require('puppeteer');

const getMountsList = async URL => {
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle2' });

    await page.addScriptTag({ path: './app/utils/getPictureUrl.js' });
    await page.addScriptTag({ path: './app/config/constants.js' });
    
    const data = await page.evaluate(() => {
        const dragoturkeys = [];
        let dragoturkeyId = 1;

        document.querySelectorAll('tbody > tr').forEach(async line => {
            const dragoturkey = {
                id: dragoturkeyId,
                name: line.querySelector('td:nth-child(2) > span[class="ak-linker ak-widgetcreated"] > a').innerText,
                pictureUrl: getPictureUrl(line.querySelector('div[class="ak-entitylook"]').getAttribute('style', 'background')),
                generation: parseInt(line.querySelector('td:nth-child(3)').innerText),
                detailsLink: constants.BASE_URL + line.querySelector('td:nth-child(2) > span[class="ak-linker ak-widgetcreated"] > a').getAttribute('href'),
            };

            dragoturkeys.push(dragoturkey);
            dragoturkeyId++;
        });

        return dragoturkeys;
    });

    await browser.close();

    return data;
};

module.exports = getMountsList;
