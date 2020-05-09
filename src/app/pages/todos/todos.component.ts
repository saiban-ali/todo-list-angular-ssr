import { Todo } from './../../models/Todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title: string = 'TODOS';
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(({ id }) => id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      console.log(todo);
      this.todos.push(todo)
    });
  }

}
