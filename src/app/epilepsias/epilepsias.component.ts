import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epilepsias',
  templateUrl: './epilepsias.component.html',
  styleUrls: ['./epilepsias.component.css']
})
export class EpilepsiasComponent implements OnInit {


  patients: Patient[];

  constructor(private pacienteService: PatientService, private router: Router) { }

  ngOnInit() {
        this.pacienteService.epilepsias().subscribe(data => this.patients = data);
  }

  verEstudios(paciente) {
    this.router.navigate(['/studies', paciente, paciente]);
  }

  buscar(texto) {
    console.log(texto);
    this.pacienteService.searchEpilepticos(texto).subscribe(data => this.patients = data);
  }

  volver() {
    this.router.navigate(['/launcher']);
  }

}
