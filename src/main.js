$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./Components/homePage');
var About = require('./Components/about/aboutPage');
var Header =  require('./Components/common/header');
var Authors = require('./Components/authors/authorsPage');


(function(win)
{
    "use strict";

    var App = React.createClass({
        render: function(){
            var Page;

            switch(this.props.rout)
            {
                case 'about':
                    Page = About;
                    break;
                case 'authors':
                    Page = Authors;
                    break;
                default:
                    Page = Home;
                    break;
            }

            return (
                <div>
                    <Header />
                    <Page />
                </div>
            );
        }
    });


    function render()
    {
        var rout = win.location.hash.substr(1);
        React.render(<App rout={rout}/>, document.getElementById("app"));
    }

    win.addEventListener("hashchange", render);
    render();
})(window);


