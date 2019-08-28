import { Component, OnInit } from '@angular/core';
import { PorcentajeDescargaResonador } from '../model/PorcentajeDescargaResonador';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResonadorService } from '../resonador.service';
import { PatientR } from '../model/PatientR';

@Component({
  selector: 'app-descargaresonador',
  templateUrl: './descargaresonador.component.html',
  styleUrls: ['./descargaresonador.component.css']
})
export class DescargaresonadorComponent implements OnInit {

  porcentajes :PorcentajeDescargaResonador[];
  pacientes: PatientR[];

  constructor(private service: ResonadorService,  private route: ActivatedRoute, 
    private router: Router) { 

      this.pacientes = new Array<PatientR>();
    }




  ngOnInit() {

    this.service.refrescar().subscribe();
    this.service.porcentaje().subscribe(data => this.calcularPorcentaje(data));
  }


  calcularPorcentaje(data: PorcentajeDescargaResonador[]) : void {
    this.porcentajes = data;
    //this.pacientes.push(data.pacientes);
    if (this.porcentajes.length == 2) {
      if (this.porcentajes[0].porcentaje + this.porcentajes[1].porcentaje == 200) {
        this.router.navigate(['/buscarpacientesresonador']);
        return;
      }
    }

   this.service.porcentaje().subscribe(data => this.calcularPorcentaje(data));
  }

}
