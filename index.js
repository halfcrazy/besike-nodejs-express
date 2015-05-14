var http = require('http');

module.exports = function() {
  function requestListener(req, res, next) {
    res.statusCode = 404;
    res.end()
  };
  requestListener.stack = []
  requestListener.listen = function(arguments) {
    return http.createServer(requestListener).listen(arguments);
  }
  requestListener.use = function(func) {
    requestListener.stack.push(func);
  };
  return requestListener;
};
