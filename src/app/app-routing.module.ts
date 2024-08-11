import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './modules/students/table/table.component';
import { ProfessorsComponent } from './modules/professors/table/table.component';
import { CoursesComponent } from './modules/courses/table/table.component';
import { StudentFormComponent } from './modules/students/form/form.component';
import { ProfessorFormComponent } from './modules/professors/form/form.component';
import { CourseFormComponent } from './modules/courses/form/form.component';
const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'professors', component: ProfessorsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'add-student', component: StudentFormComponent },
  { path: 'edit-student/:id', component: StudentFormComponent },
  { path: 'add-professor', component: ProfessorFormComponent },
  { path: 'edit-professor/:id', component: ProfessorFormComponent },
  { path: 'add-course', component: CourseFormComponent },
  { path: 'edit-course/:id', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
