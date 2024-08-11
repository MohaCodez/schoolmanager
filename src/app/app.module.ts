import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './modules/students/form/form.component';
import { StudentsComponent } from './modules/students/table/table.component';
import { ProfessorsComponent } from './modules/professors/table/table.component';
import { CoursesComponent } from './modules/courses/table/table.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ProfessorFormComponent } from './modules/professors/form/form.component';
import { CourseFormComponent } from './modules/courses/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ProfessorsComponent,
    CoursesComponent,
    MenuComponent,
    StudentFormComponent,
    ProfessorFormComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Moved to imports array
    MenubarModule, // Moved to imports array
    TableModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
