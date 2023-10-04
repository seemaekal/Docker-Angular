import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // Define an array to store the TODO items
  todoItems: string[] = [];
  newTodo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Add a new TODO item to the list
  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      this.todoItems.push(this.newTodo);
      this.newTodo = '';
    }
  }

  // Remove a TODO item from the list
  removeTodo(index: number): void {
    this.todoItems.splice(index, 1);
  }
}
