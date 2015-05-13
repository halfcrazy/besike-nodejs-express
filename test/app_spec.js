var express = require("../");
var request = require("supertest");
var http = require("http");

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


});
