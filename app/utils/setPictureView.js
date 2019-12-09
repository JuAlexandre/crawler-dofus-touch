const constants = require('../config/constants');

const setPictureView = (imageUrl, viewMode) => {
    return imageUrl.replace(constants.PICTURE_VIEW_PATTERNE, `/${viewMode}/`);
};

module.exports = setPictureView;
