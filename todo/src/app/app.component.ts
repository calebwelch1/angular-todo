import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert("Please enter a todo");
    }
  }
  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  remove(id: number) {
    this.todos.splice(this.todos.indexOf(this.todos[id]), 1);
  }
}
