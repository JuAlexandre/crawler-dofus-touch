const puppeteer = require('puppeteer');

const getMountsDetails = async dragoturkeysWithoutDetails => {
    const dragoturkeys = dragoturkeysWithoutDetails;

    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    for(let i = 0; i < dragoturkeys.length; i++) {
        await page.goto(dragoturkeys[i].detailsLink, { waitUntil: 'networkidle2' });

        Object.assign(
            dragoturkeys[i],
            await page.evaluate(() => {
                const dragoturkeyEffects = [];
                const dragoturkeyCharacteristics = [];
    
                const details = document.querySelectorAll('.row:nth-child(2) > .col-md-6');
                details.forEach(detail => {
                    const title = detail.querySelector('div[class="ak-container ak-panel"] > div[class="ak-panel-title"]').innerText;
                    if (title === 'EFFETS' || title === 'EFFECTS') {
                        const effects = detail.querySelectorAll('.ak-title');
                        effects.forEach(effect => dragoturkeyEffects.push(effect.innerText));
                    } else if (title === 'CARACTÉRISTIQUES' || title === 'CHARACTERISTICS') {
                        const characteristics = detail.querySelectorAll('.ak-title');
                        characteristics.forEach(characteristic => dragoturkeyCharacteristics.push(characteristic.innerText));
                    }
                });
    
                return { effects: dragoturkeyEffects, characteristics: dragoturkeyCharacteristics };
            })
        );
    }

    await page.close();

    return dragoturkeys;
};

module.exports = getMountsDetails;
