import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { StudentResolverService } from './table/student-resolver.service';
const routes: Routes = [
  { path: '', component: StudentsComponent , resolve: {students: StudentResolverService}},
  { path: 'add', component: FormComponent },
  { path: 'edit/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
