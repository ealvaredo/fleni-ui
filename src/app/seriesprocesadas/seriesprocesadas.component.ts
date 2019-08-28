import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seriesprocesadas',
  templateUrl: './seriesprocesadas.component.html',
  styleUrls: ['./seriesprocesadas.component.css']
})
export class SeriesprocesadasComponent implements OnInit {

  patients: Patient[];

  constructor(private pacienteService: PatientService, private router: Router) { }

  ngOnInit() {
        this.pacienteService.seriesProcesadas().subscribe(data => this.patients = data);
  }

  verEstudios(paciente) {
    this.router.navigate(['/studies', paciente, paciente]);
  }

  buscar(texto) {
    console.log(texto);
    this.pacienteService.searchSeriesProcesadas(texto).subscribe(data => this.patients = data);
  }


}
