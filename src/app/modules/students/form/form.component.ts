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
    name: null,        // No default value
    age: null,       // No default value
    branch: null        // No default value
  };

  @Output() onClose = new EventEmitter<void>();

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // No need to reset the object here as it's already set to null by default.
  }

  onSubmit(): void {
    if (this.student.id) {
      this.studentService.updateStudent(this.student)
        .subscribe(() => {
          this.onClose.emit();
        });
    } else {
      this.studentService.addStudent(this.student)
        .subscribe(() => {
          this.onClose.emit();
        });
    }
  }
}
