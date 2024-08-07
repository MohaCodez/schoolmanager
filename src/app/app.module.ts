import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ProfessorsComponent } from './professors/professors.component';
import { CoursesComponent } from './courses/courses.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { CourseFormComponent } from './course-form/course-form.component'; // Import FormsModule

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
