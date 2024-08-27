import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { CourseService } from './course.service';
 
@Injectable({
  providedIn: 'root'
})
export class CourseResolverService implements Resolve<any> {
  constructor(private product: CourseService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getCourses().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}