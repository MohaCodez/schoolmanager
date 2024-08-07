import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ProfessorsComponent } from './professors/professors.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
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
