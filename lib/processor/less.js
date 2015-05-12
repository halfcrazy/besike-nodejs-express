var fs = require('fs');
var path = require('path');
var less = require('less');

function makeLess(root) {
  return function(req, res, next) {
    var full_url = root + req.url;
    fs.readFile(full_url, {
      encoding: "utf8"
    }, function(err, data) {
      if (!err) {
        res.end(data);
      } else {
        if (path.extname(req.url) == '.css') {
          fs.readFile(full_url.replace('.css', '.less'), {
            encoding: "utf8"
          }, function(err, data) {
            if (!err) {
              less.render(data, function(err, data) {
                if (err) {
                  next();
                } else {
                  res.setHeader("Content-Length", data.length);
                  res.setHeader("Content-Type", "text/css; charset=UTF-8");
                  res.end(data);
                }
              });
            } else {
              next();
            }
          });
        } else {
          next();
        }
      }
    });
  };
}
module.exports = makeLess;
