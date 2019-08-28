import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarpacientesresonador',
  templateUrl: './buscarpacientesresonador.component.html',
  styleUrls: ['./buscarpacientesresonador.component.css']
})
export class BuscarpacientesresonadorComponent implements OnInit {

  name: String;

  constructor(private service: PatientService, private router: Router) { }

  ngOnInit() {
  }

  volver() : void {

    this.router.navigate(['/launcher']);
  }

  search() : void {
    this.router.navigate(['/pacientesresonador', this.name]);
  }

}
