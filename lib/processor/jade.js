var fs = require('fs');
var path = require('path');
var jade = require('jade');

function makeJade(root) {
  return function(req, res, next) {
    var full_url = root + req.url;
    fs.readFile(full_url, {
      encoding: "utf8"
    }, function(err, data) {
      if (!err) {
        res.end(data);
      } else {
        if (path.extname(req.url) == '.html') {
          fs.readFile(full_url.replace('.html', '.jade'), {
            encoding: "utf8"
          }, function(err, data) {
            if (!err) {
              var html = jade.render(data);
              res.setHeader("Content-Length", html.length);
              res.setHeader("Content-Type", "text/html; charset=UTF-8");
              res.end(html);
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
module.exports = makeJade;
