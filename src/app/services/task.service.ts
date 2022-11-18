import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/tasks';
  handleError: (err: any, caught: Observable<Task>) => ObservableInput<any>;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(this.baseUrl)
      .pipe(catchError((err) => throwError(() => new Error(err))));
  }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>(this.baseUrl, task, httpOptions)
      .pipe(catchError((err) => throwError(() => new Error(err))));
  }
  deleteTask(task: Task): Observable<Task> {
    const url = this.baseUrl + '/' + task.id;
    return this.http
      .delete<Task>(url)
      .pipe(catchError((err) => throwError(() => new Error(err))));
  }

  toggleReminder(task: Task): Observable<Task> {
    const url = this.baseUrl + '/' + task.id;
    return this.http
      .put<Task>(url, task, httpOptions)
      .pipe(catchError((err) => throwError(() => new Error(err))));
  }
}
