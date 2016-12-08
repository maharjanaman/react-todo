var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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

  handleAddTodo: function (text) {
    alert('New Todo:' + text);
  },

  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
