import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorsComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ProfessorResolverService } from './table/professor-resolver.service';

const routes: Routes = [
  { path: '', component: ProfessorsComponent, resolve: { professors: ProfessorResolverService } },
  { path: 'add', component: FormComponent },
  { path: 'edit/:id', component: FormComponent, resolve: { professor: ProfessorResolverService } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorsRoutingModule { }
