var exec = require('cordova/exec');

exports.update = function (success, error) {
    exec(success, error, 'InAppUpdate', 'update', []);
};
