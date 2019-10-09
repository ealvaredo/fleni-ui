import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seriesencola',
  templateUrl: './seriesencola.component.html',
  styleUrls: ['./seriesencola.component.css']
})
export class SeriesencolaComponent implements OnInit {

  patients: Patient[];

  constructor(private pacienteService: PatientService, private router: Router) { }

  ngOnInit() {
        this.pacienteService.seriesEnCola().subscribe(data => this.patients = data);
  }

  verEstudios(paciente) {
    this.router.navigate(['/studies', paciente, paciente]);
  }

  buscar(texto) {
    console.log(texto);
    this.pacienteService.searchSeriesEnCola(texto).subscribe(data => this.patients = data);
  }

  volver() {
    this.router.navigate(['/launcher']);
  }


}
