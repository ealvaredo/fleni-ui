import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { PatientR } from '../model/PatientR';
import { ActivatedRoute, Router } from '@angular/router';
import { ResonadorService } from '../resonador.service';

@Component({
  selector: 'app-pacientesresonador',
  templateUrl: './pacientesresonador.component.html',
  styleUrls: ['./pacientesresonador.component.css']
})
export class PacientesresonadorComponent implements OnInit {

  patients: PatientR[];

  
  constructor(private service: PatientService, private route: ActivatedRoute, 
    private router: Router, private resonadorService: ResonadorService) { }



  ngOnInit() {

    this.route.params.subscribe(params => {
      this.service.getPatientsResonador(params['name']).subscribe(data => this.patients = data);
  });
  }

  volver() : void {

    this.router.navigate(['/buscarpacientesresonador']);

  }

  descargar(id: String) : void {
    this.router.navigate(['/descargandopaciente', id]);
    this.service.descargar(id).subscribe(data => data, error => 
      this.router.navigate(['/error', error]));
  }




  refrescar() : void {

   
    this.router.navigate(['/refrescarresonador']);


  }

}
