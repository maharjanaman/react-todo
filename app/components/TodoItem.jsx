var React = require('react');

var TodoItem = React.createClass({
  render: function () {
    var {id, text} = this.props;
    return (
      <div>
        <p>{id}. {text}</p>
      </div>
    );
  }
});

module.exports = TodoItem;
