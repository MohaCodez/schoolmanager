import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) },
  { path: 'professors', loadChildren: () => import('./modules/professors/professors.module').then(m => m.ProfessorsModule) },
  { path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule) },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: '**', redirectTo: '/students' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
