import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { ProfessorService } from './professor.service';
 
@Injectable({
  providedIn: 'root'
})
export class ProfessorResolverService implements Resolve<any> {
  constructor(private product: ProfessorService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getProfessors().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}