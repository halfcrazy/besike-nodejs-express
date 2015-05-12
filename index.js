var connect = require('connect');
var serve_static = require('serve-static');
var makejade = require('./lib/processor/jade');
var makeless = require('./lib/processor/less');
module.exports = function(path) {
  var Path;
  if (path) {
    Path = path;
  } else {
    Path = process.cwd();
  }
  return connect().use(function(request, response, next) {
    var url = request.url.split("/");
    if (url[1] == "current-time") {
      response.end((new Date()).toISOString());
    }
    next();
  }).use(serve_static(Path)).use(makejade(Path)).use(makeless(Path));
};
