import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}?_limit=10`);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${this.baseUrl}/${todo.id}`, options);
  }

  toggleCheck(todo: Todo): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${todo.id}`, todo, options)
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${this.baseUrl}`, todo, options);
  }
}
