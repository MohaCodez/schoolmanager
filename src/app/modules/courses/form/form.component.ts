import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../table/course';
import { CourseService } from '../table/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class CourseFormComponent implements OnInit {
  course: Course = { id: 0, name: '', branch: '', description: '', credits:0 };
  isEdit: boolean = false;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.courseService.getCourse(+id).subscribe(course => this.course = course);
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.courseService.updateCourse(this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    } else {
      this.courseService.addCourse(this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }
}
