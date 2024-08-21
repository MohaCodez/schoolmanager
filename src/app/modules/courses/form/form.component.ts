import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Course } from '../table/course';
import { CourseService } from '../table/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() course: Course = {
    id: 0,
    name: null,
    branch: null,
    description: null,
    credits: null
  };

  @Output() onClose = new EventEmitter<void>();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.course.id) {
      this.courseService.updateCourse(this.course)
        .subscribe(() => {
          this.onClose.emit();
        });
    } else {
      this.courseService.addCourse(this.course)
        .subscribe(() => {
          this.onClose.emit();
        });
    }
  }
}
