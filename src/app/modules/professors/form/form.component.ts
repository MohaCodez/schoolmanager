import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from '../table/professor';
import { ProfessorService } from '../table/professor.service';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-professor-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  professorForm: FormGroup;
  professorId: number | undefined;

  @Input() professor: Professor | null = null;

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService // Inject ToastrService
  ) {
    this.professorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.professorId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : undefined;

    if (this.professorId) {
      this.professorService.getProfessor(this.professorId).subscribe(professor => {
        if (professor) {
          this.professorForm.patchValue(professor);
        } else {
          // Handle case where professor is not found
        }
      });
    }
  }

  onSubmit(): void {
    if (this.professorId) {
      // Update existing professor
      this.professorService.updateProfessor({ ...this.professorForm.value, id: this.professorId }).subscribe(() => {
        this.toastr.success('Professor updated successfully'); // Success toast
        this.router.navigate(['/professors']); // Redirect to the professors list after update
      });
    } else {
      // Add new professor
      this.professorService.addProfessor(this.professorForm.value).subscribe(() => {
        this.toastr.success('Professor added successfully'); // Success toast
        this.router.navigate(['/professors']); // Redirect to the professors list after addition
      });
    }
  }
}
