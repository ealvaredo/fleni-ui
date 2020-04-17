import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientesestudio',
  templateUrl: './pacientesestudio.component.html',
  styleUrls: ['./pacientesestudio.component.css']
})
export class PacientesestudioComponent implements OnInit {

  constructor(private patientService: PatientService,  private router: Router) { }

 pacientes: Patient[];

  ngOnInit() {

    this.patientService.pacientesestudio().subscribe(data => this.pacientes = data);
  }

  verEstudios(paciente: string) : void {
 
    this.router.navigate(['/studies', paciente]);
  }

  volver() {
    
  }
  

}
