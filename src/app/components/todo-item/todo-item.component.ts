import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      'completed': this.todo.completed
    }
    return classes;
  }

  onCheckChange() {
    this.todo.completed = !this.todo.completed;
    this.todoService.toggleCheck(this.todo).subscribe(todo => console.log(todo));
  }

  onDelete() {
    this.deleteTodo.emit(this.todo);
  }

}
