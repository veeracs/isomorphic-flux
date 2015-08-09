//	allow requiring jsx files
require("node-jsx").install({
    extension: '.jsx'
});

var express = require("express");
var React = require("react");
var App = require("./components/Application.jsx");

var Component = React.createFactory(App);
var server = express();
var port = process.env.PORT || 9999;

server.use(function(req, res, next) {
    var component = Component();
    var html = React.renderToString(component);
    res.send(html);
});

server.listen(port, function() {
    console.log("Listening on port: " + port);
});