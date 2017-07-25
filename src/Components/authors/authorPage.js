"use strict";

var React = require('react');
var AuthorsApi = require('../../api/authorApi');
var AuthorForm = require('./authorForm');

var Author = React.createClass(
  {
     getInitialState: function()
     {
         return {
             author: {id: '', firstName: '', lastName: ''}
            };
     },

     setAuthor: function(event)
     {
        var fieldName = event.target.name;
        var fieldValue = event.target.value;
        this.state.author[fieldName] = fieldValue;
        return this.setState({author: this.state.author});
     },

      render: function()
      {

          return (
            <AuthorForm author={this.state.author} onChange={this.setAuthor}/>);
      }
  }  
);

module.exports = Author;