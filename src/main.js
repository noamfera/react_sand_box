"use strict";

var React = require('react');
var ReactHandler = require('react-router').ReactHandler;
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler){
    React.render(<Handler />, document.getElementById("app"));
});




