var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'L React'
        },
        {
          id: 2,
          text: 'L Redux'
        },
        {
          id: 3,
          text: 'React Native'
        }
      ]
    };
  },

  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
