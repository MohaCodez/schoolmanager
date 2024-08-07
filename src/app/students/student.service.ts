import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/students'; // URL to web api

  constructor(private http: HttpClient) { }

  /** GET: get all students */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Student[]>('getStudents', []))
      );
  }

  /** GET: get student by id */
  getStudent(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Student>(url)
      .pipe(
        catchError(this.handleError<Student>(`getStudent id=${id}`))
      );
  }

  /** POST: add a new student */
  addStudent(student: Student): Observable<Student> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Student>(this.apiUrl, student, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('addStudent'))
      );
  }

  /** DELETE: delete the student */
  deleteStudent(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Student>(url)
      .pipe(
        catchError(this.handleError<Student>('deleteStudent'))
      );
  }

  /** PUT: update the student */
  updateStudent(student: Student): Observable<Student> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put<Student>(url, student, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateStudent'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
