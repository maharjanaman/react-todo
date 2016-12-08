var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoList', () => {
  it('should exits', () => {
    expect(TodoList).toExist();
  });

  it('should render one TodoItem component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Todo1'
      }, {
        id: 2,
        text: 'Todo2'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

    expect(todosComponents.length).toBe(todos.length);
  });
});
