import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professor } from './professor';
import { ProfessorService } from './professor.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-professors',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class ProfessorsComponent implements OnInit {
  professors: Professor[] = [];
  displayDialog: boolean = false;
  selectedProfessor: Professor | null = null;

  constructor(
    private route: ActivatedRoute,
    private professorService: ProfessorService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService // Inject ToastrService
  ) { }
  
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.professors = data['professors'];
    });
  }

  showAddDialog(): void {
    this.selectedProfessor = {
      id: undefined,
      name: null,
      email: null,
      department: null
    };
    this.displayDialog = true;
  }

  editProfessor(professor: Professor): void {
    this.selectedProfessor = { ...professor };
    this.displayDialog = true;
  }

  deleteProfessor(id: number): void {
    this.ngxLoader.start();
    this.professorService.deleteProfessor(id)
      .subscribe(
        () => {
          this.refreshProfessors();
          this.toastr.success('Professor deleted successfully'); // Success toast
        },
        error => {
          this.toastr.error('Failed to delete professor'); // Error toast
        }
      );
  }

  closeDialog(): void {
    this.displayDialog = false;
    this.refreshProfessors();
  }

  refreshProfessors(): void {
    this.ngxLoader.start();
    this.professorService.getProfessors().subscribe(
      professors => {
        this.professors = professors;
        this.toastr.info('Professor list updated'); // Info toast
        this.ngxLoader.stop();
      },
      error => {
        this.toastr.error('Failed to updated professor list'); // Error toast
        this.ngxLoader.stop();
      }
    );
  }
}
