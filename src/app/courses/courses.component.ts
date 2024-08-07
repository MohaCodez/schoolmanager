import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  addCourse(): void {
    this.router.navigate(['/add-course']);
  }

  editCourse(course: Course): void {
    this.router.navigate(['/edit-course', course.id]);
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id)
      .subscribe(() => {
        this.courses = this.courses.filter(course => course.id !== id);
      });
  }
}
