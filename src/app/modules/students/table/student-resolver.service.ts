import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { StudentService } from './student.service';
 
@Injectable({
  providedIn: 'root'
})
export class StudentResolverService implements Resolve<any> {
  constructor(private product: StudentService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getStudents().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}