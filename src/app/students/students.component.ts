import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  addStudent(): void {
    this.router.navigate(['/add-student']);
  }

  editStudent(student: Student): void {
    this.router.navigate(['/edit-student', student.id]);
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id)
      .subscribe(() => {
        this.students = this.students.filter(student => student.id !== id);
      });
  }
}
