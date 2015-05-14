var express = require("../");
var request = require("supertest");
var http = require("http");
var should = require('chai').should();

describe("app", function() {
  var app = express();

  describe("create http server", function() {
    // write your test here
    it("responds to /foo with 404", function(done) {
      var server = http.createServer(app);
      request(server).get("/foo").expect(404).end(done);
    });
  });

  describe("#listen", function() {
    // write your test here
    it("responds to /foo with 404", function(done) {
      var port = 7000;
      var server = app.listen(port, done);
      request("http://localhost:" + port).get("/foo").expect(404).end(done);
    });
  });

  describe(".use", function() {
    /// your own test
    before(function() {
      app = express();
    });
    it("add middleware to app stack", function(done) {
      function m1(req, res, next) {};

      function m2(req, res, next) {};
      app.use(m1);
      app.stack.should.have.length(1);
      app.use(m2);
      app.stack.should.have.length(2);
      done();
    });
  });


});
