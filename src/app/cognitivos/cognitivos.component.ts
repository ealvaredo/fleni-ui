import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {saveAs as importedSaveAs} from "file-saver";


@Component({
  selector: 'app-cognitivos',
  templateUrl: './cognitivos.component.html',
  styleUrls: ['./cognitivos.component.css']
})
export class CognitivosComponent implements OnInit {

  patients: Patient[];

  constructor(private pacienteService: PatientService, private router: Router, private http: HttpClient) { }

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

  volver() {
    this.router.navigate(['/launcher']);
  }

  descargar() {
    console.log("Descargondo connitivos.");
    const options = { responseType: 'blob' as 'json' }
    
    return this.http.get<Blob>(environment.apiUrl + '/patient/descargarCognitivos',  options).
    subscribe(blob => {
      var fileName = 'pacientes.csv';
      importedSaveAs(blob, fileName)
    },
    error => {
      console.log(error);
      
    });


    
    
  }

}
