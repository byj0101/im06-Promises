/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var read = require('./promiseConstructor').pluckFirstLineFromFileAsync;
var profile = require('./promisification').getGitHubProfileAsync;


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return read(readFilePath)
    .then(function(data) {
      a = profile(data);
      console.log(data);
      return a;
    })
    .then(function(data) {
      console.log('data : ', data);
      return new Promise(function (resolve, reject) {
        fs.writeFile(writeFilePath, JSON.stringify(data), function (err) {
          if (err) { reject(err); } else { resolve(data); }
        });
      });
    });  
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
