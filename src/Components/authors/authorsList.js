"use strict";

var React = require('react');
var AuthorsApi = require('../../api/authorApi');

var AuthorsList = React.createClass(
  {
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
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow)}
                    </tbody>
                </table>
            </div>);
      }
  }  
);

module.exports = AuthorsList;