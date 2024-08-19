import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Professor } from '../table/professor';
import { ProfessorService } from '../table/professor.service';

@Component({
  selector: 'app-professor-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() professor: Professor = {
    id: 0,
    name: '',
    email: '',
    department: ''
  };

  @Output() onClose = new EventEmitter<void>();

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    if (!this.professor) {
      this.professor = {
        id: 0,
        name: '',
        email: '',
        department: ''
      };
    }
  }

  onSubmit(): void {
    if (this.professor.id) {
      // Update existing professor
      this.professorService.updateProfessor(this.professor)
        .subscribe(() => {
          this.onClose.emit();
        });
    } else {
      // Add new professor
      this.professorService.addProfessor(this.professor)
        .subscribe(() => {
          this.onClose.emit();
        });
    }
  }
}
