import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = 'http://localhost:3000/professors'; // URL to web api

  constructor(private http: HttpClient) { }

  /** GET: get all professors */
  getProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Professor[]>('getProfessors', []))
      );
  }

  /** GET: get professor by id */
  getProfessor(id: number): Observable<Professor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Professor>(url)
      .pipe(
        catchError(this.handleError<Professor>(`getProfessor id=${id}`))
      );
  }

  /** POST: add a new professor */
  addProfessor(professor: Professor): Observable<Professor> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Professor>(this.apiUrl, professor, httpOptions)
      .pipe(
        catchError(this.handleError<Professor>('addProfessor'))
      );
  }

  /** DELETE: delete the professor */
  deleteProfessor(id: number): Observable<Professor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Professor>(url)
      .pipe(
        catchError(this.handleError<Professor>('deleteProfessor'))
      );
  }

  /** PUT: update the professor */
  updateProfessor(professor: Professor): Observable<Professor> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.apiUrl}/${professor.id}`;
    return this.http.put<Professor>(url, professor, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateProfessor'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
