var React = require('react');
var {connect} = require('react-redux');

import TodoItem from 'TodoItem';
var TodoApi = require('TodoApi');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <TodoItem key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
