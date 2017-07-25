
$ = jQuery = require('jquery');
var React = require('react');
var ReactHandler = require('react-router').ReactHandler;
var Header =  require('./common/header');

var App = React.createClass({
    render: function(){

            return (
                <div>
                    <Header />
                    <ReactHandler />
                </div>
            );
        }
});

module.exports = App;