const getImageUrl = styleAttributeValue => {
    return styleAttributeValue.match(/https?:\/\/[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,4}(\/\S*)?.png/gi)[0];
};

module.exports = getImageUrl;
