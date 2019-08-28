import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cognitivos',
  templateUrl: './cognitivos.component.html',
  styleUrls: ['./cognitivos.component.css']
})
export class CognitivosComponent implements OnInit {

  patients: Patient[];

  constructor(private pacienteService: PatientService, private router: Router) { }

  ngOnInit() {
        this.pacienteService.cognitivos().subscribe(data => this.patients = data);
  }

  verEstudios(paciente) {
    this.router.navigate(['/studies', paciente, paciente]);
  }

  buscar(texto) {
    console.log(texto);
    this.pacienteService.searchCognitivos(texto).subscribe(data => this.patients = data);
  }

}
