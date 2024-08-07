import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students/student';
import { StudentService } from '../students/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: Student = { id: 0, name: '', age: 0, branch: '' };
  isEdit: boolean = false;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.studentService.getStudent(+id).subscribe(student => this.student = student);
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    } else {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }
}
