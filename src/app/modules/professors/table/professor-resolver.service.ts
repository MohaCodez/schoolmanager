import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfessorService } from './professor.service';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorResolverService implements Resolve<Professor | Professor[]> {
  constructor(private professorService: ProfessorService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Professor | Professor[]> {
    const id = route.paramMap.get('id');

    if (id) {
      // Resolve a single professor by ID
      return this.professorService.getProfessor(+id).pipe(
        map(professor => professor || {} as Professor), // Ensure non-null return
        catchError(() => of({} as Professor)) // Return empty object if not found
      );
    } else {
      // Resolve the list of professors
      return this.professorService.getProfessors().pipe(
        catchError(() => of([] as Professor[])) // Return an empty array in case of error
      );
    }
  }
}
