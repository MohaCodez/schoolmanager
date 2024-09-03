import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HighlightNADirective } from '../../highlight-na.directive';

@NgModule({
  declarations: [
    StudentsComponent,
    HighlightNADirective,
    FormComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule
  ]
})
export class StudentsModule { }
