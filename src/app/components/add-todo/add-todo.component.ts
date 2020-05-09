import { Todo } from './../../models/Todo';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo: Todo = new Todo(this.title, false);
    this.addTodo.emit(todo);
  }

}
