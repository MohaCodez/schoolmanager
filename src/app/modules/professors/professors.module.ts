import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorsRoutingModule } from './professors-routing.module';
import { ProfessorsComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ProfessorsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ProfessorsRoutingModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule
  ]
})
export class ProfessorsModule { }
