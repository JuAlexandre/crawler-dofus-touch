const fs = require('fs');
const request = require('request');

const downloadMountsPictures = (url, filename, callback = () => {}) => {
    request.head(url, error => {
        if (error) return error;

        return request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

module.exports = downloadMountsPictures;
