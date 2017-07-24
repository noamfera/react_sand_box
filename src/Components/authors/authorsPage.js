"use strict";

var React = require('react');
var AuthorsApi = require('../../api/authorApi');

var Authors = React.createClass(
  {
     getInitialState: function()
     {
         return {authors: []};
     },

     componentWillMount: function()
     {
         this.setState({authors: AuthorsApi.getAllAuthors()});
     },

      render: function()
      {
          var createAuthorRow = function(author)
          {
              return (
                  <tr key={author.id}>
                    <td><a href="/#about">{author.id}</a></td>
                    <td>TTTTT</td>
                  </tr>
              );
          };

          return (
            <div>
                <h1>Authors</h1>

                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow)}
                    </tbody>
                </table>
            </div>);
      }
  }  
);

module.exports = Authors;