import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses'; // URL to web api

  constructor(private http: HttpClient) { }

  /** GET: get all courses */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Course[]>('getCourses', []))
      );
  }

  /** GET: get course by id */
  getCourse(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Course>(url)
      .pipe(
        catchError(this.handleError<Course>(`getCourse id=${id}`))
      );
  }

  /** POST: add a new course */
  addCourse(course: Course): Observable<Course> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Course>(this.apiUrl, course, httpOptions)
      .pipe(
        catchError(this.handleError<Course>('addCourse'))
      );
  }

  /** DELETE: delete the course */
  deleteCourse(id: number): Observable<Course> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Course>(url)
      .pipe(
        catchError(this.handleError<Course>('deleteCourse'))
      );
  }

  /** PUT: update the course */
  updateCourse(course: Course): Observable<Course> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.put<Course>(url, course, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateCourse'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
