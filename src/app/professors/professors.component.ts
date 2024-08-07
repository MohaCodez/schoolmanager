import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from './professor';
import { ProfessorService } from './professor.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
  professors: Professor[] = [];

  constructor(
    private professorService: ProfessorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors(): void {
    this.professorService.getProfessors()
      .subscribe(professors => this.professors = professors);
  }

  addProfessor(): void {
    this.router.navigate(['/add-professor']);
  }

  editProfessor(professor: Professor): void {
    this.router.navigate(['/edit-professor', professor.id]);
  }

  deleteProfessor(id: number): void {
    this.professorService.deleteProfessor(id)
      .subscribe(() => {
        this.professors = this.professors.filter(professor => professor.id !== id);
      });
  }
}
