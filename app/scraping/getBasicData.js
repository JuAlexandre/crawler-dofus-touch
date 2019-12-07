const getBasicData = async page => {
    await page.addScriptTag({ path: './app/utils/getPictureUrl.js' });
    
    return await page.evaluate(() => {
        const dragoturkeys = [];
        let dragoturkeyId = 1;

        document.querySelectorAll('tbody > tr').forEach(async line => {
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
};

module.exports = getBasicData;
