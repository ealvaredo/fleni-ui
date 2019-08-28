import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tumores',
  templateUrl: './tumores.component.html',
  styleUrls: ['./tumores.component.css']
})
export class TumoresComponent implements OnInit {

  patients: Patient[];

  constructor(private pacienteService: PatientService, private router: Router) { }

  ngOnInit() {
        this.pacienteService.tumores().subscribe(data => this.patients = data);
  }

  verEstudios(paciente) {
    this.router.navigate(['/studies', paciente, paciente]);
  }

  buscar(texto) {
    console.log(texto);
    this.pacienteService.searchTumores(texto).subscribe(data => this.patients = data);
  }


}
