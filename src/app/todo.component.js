import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  static parameters = [TodoService]

  constructor(todoService) {
    this.todoService = todoService;

    this.text = '';
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onSubmit() {
    this.todoService.addTodo(this.text);

    this.text = '';

    this.todos = this.todoService.getTodos();
  }

  toggleTodo(id) {
    this.todoService.toggleTodo(id);
  }

  clearTodos() {
    this.todoService.clearTodos();

    this.todos = [];
  }
}
