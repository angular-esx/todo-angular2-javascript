import { Class, Inject } from '@angular/core';
import { window } from '@angular/platform-browser/src/facade/browser';

export const TodoService = Class({
  constructor: function(){
      this.localStorage = window.localStorage;
      this.json = window.JSON;
  },

  getTodos: function() {
    let todos = this.json.parse(this.localStorage.getItem('todos') || '[]');

    return todos;
  },

  addTodo: function(todo) {

    let todos = this.getTodos();

    todos.push({
      id: todos.length + 1,
      text: todo,
      isCompleted: false
    });

    this.localStorage.setItem('todos', this.json.stringify(todos));

  },

  toggleTodo: function(id) {
    let todos = this.getTodos();

    todos.map((todo) => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    this.localStorage.setItem('todos', this.json.stringify(todos));
  },

  clearTodos: function() {
    this.localStorage.removeItem('todos');
  },

});