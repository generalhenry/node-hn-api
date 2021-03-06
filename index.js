var request = require('request');


function getItem(itemId, callback) {
  request('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(null, JSON.parse(body));
    }
    return callback(error);
  });
}

function getUser(userName, callback) {
  request('https://hacker-news.firebaseio.com/v0/user/' + userName + '.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(null, JSON.parse(body));
    }
    return callback(error);
  });
}

function getTopStories(callback) {
  request('https://hacker-news.firebaseio.com/v0/topstories.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(null, JSON.parse(body));
    }
    return callback(error);
  });
}

function getMaxItem(callback) {
  request('https://hacker-news.firebaseio.com/v0/maxitem.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(null, JSON.parse(body));
    }
    return callback(error);
  });
}


exports.item = getItem;
exports.user = getUser;
exports.topStories = getTopStories;
exports.maxItem = getMaxItem;