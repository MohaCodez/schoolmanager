import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../table/professor';
import { ProfessorService } from '../table/professor.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ProfessorFormComponent implements OnInit {
  professor: Professor = { id: 0, name: '', email: '', department: '' };
  isEdit: boolean = false;

  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.professorService.getProfessor(+id).subscribe(professor => this.professor = professor);
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.professorService.updateProfessor(this.professor).subscribe(() => {
        this.router.navigate(['/professors']);
      });
    } else {
      this.professorService.addProfessor(this.professor).subscribe(() => {
        this.router.navigate(['/professors']);
      });
    }
  }
}
