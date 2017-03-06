import { Class, Inject } from '@angular/core';
import { window } from '@angular/platform-browser/src/facade/browser';

export class TodoService {
  constructor() {
    this.localStorage = window.localStorage;
    this.json = window.JSON;
  }

  getTodos() {
    let todos = this.json.parse(this.localStorage.getItem('todos') || '[]');

    return todos;
  }

  addTodo(todo) {

    let todos = this.getTodos();

    todos.push({
      id: todos.length + 1,
      text: todo,
      isCompleted: false
    });

    this.localStorage.setItem('todos', this.json.stringify(todos));

  }

  toggleTodo(id) {
    let todos = this.getTodos();

    todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    this.localStorage.setItem('todos', this.json.stringify(todos));
  }

  clearTodos() {
    this.localStorage.removeItem('todos');
  }

}
