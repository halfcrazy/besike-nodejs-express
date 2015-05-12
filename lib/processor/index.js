function index() {
  return function(req, res, next) {
    if (req.url == '/') {
      req.url = '/index.html';
    }
    next();
  };
}
module.exports = index;
