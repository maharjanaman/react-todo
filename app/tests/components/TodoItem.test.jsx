var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoItem = require('TodoItem');

describe('TodoItem', () => {
  it('should exists', () => {
    expect(TodoItem).toExist();
  });
});
