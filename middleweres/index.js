const fs = require('fs');

function logReqRes (filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `Request Method: ${req.method}, Request URL: ${req.url}\n`,
            (err ,data) => {
                next();
            }
           
        );
    }
}
module.exports = {
    logReqRes,
}