const constants = require('../config/constants');

const setPictureSize = (imageUrl, size = 500) => {
    return imageUrl.replace(constants.PICTURE_SIZE_PATTERNE, `${size}_${size}`);
};

module.exports = setPictureSize;
