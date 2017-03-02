import { Component } from '@angular/core';

import { TodoService } from './todo.service';

export const TodoComponent = Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
}).Class({
  constructor: [TodoService, function(todoService) {
    this.todoService = todoService;

    this.text = '';
  }],

  ngOnInit: function() {
    this.todos = this.todoService.getTodos();
  },

  onSubmit: function() {
    this.todoService.addTodo(this.text);

    this.text = '';

    this.todos = this.todoService.getTodos();
  },

  toggleTodo: function(id) {
    this.todoService.toggleTodo(id);
  },

  clearTodos: function() {
    this.todoService.clearTodos();

    this.todos = [];
  },
});
