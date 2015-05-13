var http = require('http');

module.exports = function() {
  function requestListener(req, res, next) {
    res.statusCode = 404;
    res.end()
  };
  requestListener.listen = function(arguments) {
    return http.createServer(requestListener).listen(arguments);
  }
  return requestListener;
};
