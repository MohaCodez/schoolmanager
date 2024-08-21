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
    name: null,        // No default value
    email: null,       // No default value
    department: null   // No default value
  };

  @Output() onClose = new EventEmitter<void>();

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    // No need to reset the object here as it's already set to null by default.
  }

  onSubmit(): void {
    if (this.professor.id) {
      this.professorService.updateProfessor(this.professor)
        .subscribe(() => {
          this.onClose.emit();
        });
    } else {
      this.professorService.addProfessor(this.professor)
        .subscribe(() => {
          this.onClose.emit();
        });
    }
  }
}
