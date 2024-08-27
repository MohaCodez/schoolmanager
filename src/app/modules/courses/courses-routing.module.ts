import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { CourseResolverService } from './table/course-resolver.service';
const routes: Routes = [
  { path: '', component: CoursesComponent, resolve: {courses : CourseResolverService} },
  { path: 'add', component: FormComponent },
  { path: 'edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
