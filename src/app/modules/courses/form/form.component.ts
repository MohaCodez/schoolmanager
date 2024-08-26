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
    id: undefined,
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
        .subscribe({
          next: () => this.onClose.emit(),
          error: (err) => console.error('Update failed', err) // Add UI feedback here
        });
    } else {
      this.courseService.addCourse(this.course)
        .subscribe({
          next: () => this.onClose.emit(),
          error: (err) => console.error('Add failed', err) // Add UI feedback here
        });
    }
  }
  
}
