import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seriesprocesando',
  templateUrl: './seriesprocesando.component.html',
  styleUrls: ['./seriesprocesando.component.css']
})
export class SeriesprocesandoComponent implements OnInit {

  

  patients: Patient[];

  constructor(private pacienteService: PatientService, private router: Router) { }

  ngOnInit() {
        this.pacienteService.seriesEnProceso().subscribe(data => this.patients = data);
  }

  verEstudios(paciente) {
    this.router.navigate(['/studies', paciente, paciente]);
  }

  buscar(texto) {
    console.log(texto);
    this.pacienteService.searchSeriesEnProceso(texto).subscribe(data => this.patients = data);
  }


}
