import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Student } from '../table/student';
import { StudentService } from '../table/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() student: Student = {
    id: 0,
    name: '',
    branch: '',
    age: 0
  };

  @Output() onClose = new EventEmitter<void>();

  constructor(private courseService: StudentService) {}

  ngOnInit(): void {
    if (!this.student) {
      this.student = {
        id: 0,
        name: '',
        branch: '',
        age: 0
      };
    }
  }

  onSubmit(): void {
    if (this.student.id) {
      this.courseService.updateStudent(this.student)
        .subscribe(() => {
          this.onClose.emit();
        });
    } else {
      this.courseService.addStudent(this.student)
        .subscribe(() => {
          this.onClose.emit();
        });
    }
  }
}
