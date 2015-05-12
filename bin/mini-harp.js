#!/usr/bin/env node

var mini_harp = require('mini-harp');
var argv = require('minimist')(process.argv.slice(2));
var port = argv.port || 4000;
var root = argv._[0] || process.cwd();
console.log("Starting http server on http://localhost:" + port);
var app = mini_harp(root);
app
  .use(function(request, response, next) {
    if (request.url == '/current-time') {
      response.end((new Date()).toISOString() + '\n');
    } else {
      next();
    }
  })
  .listen(port);
