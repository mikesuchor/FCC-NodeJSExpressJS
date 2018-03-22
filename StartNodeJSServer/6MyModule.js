var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, searchExtension, callback) {
    fs.readdir(directoryName, function(error, list) {
        if(error) {
            return callback(error);
        }
        else {
           list = list.filter(function(fileName) {
                var fileExtension = path.extname(fileName);
                if(fileExtension == "." + searchExtension) {
                    return fileName;
                }
            })
            
            callback(null, list);
        }
    });
}