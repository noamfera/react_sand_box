"use strict";

var React = require('react');

var AuthorForm = React.createClass(
  {
      render: function()
      {

          return (
            <form>
				<h1>Manage Author</h1>
				<input
					name="firstName"
					label="First Name"
                    onChange={this.props.onChange}
					value={this.props.author.firstName} />

				<input
					name="lastName"
					label="Last Name"
                    onChange={this.props.onChange}
					value={this.props.author.lastName}/>

				<input type="submit" value="Save" className="btn btn-default" />
			</form>);
      }
  }  
);

module.exports = AuthorForm;