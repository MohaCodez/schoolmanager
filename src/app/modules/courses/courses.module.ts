import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
