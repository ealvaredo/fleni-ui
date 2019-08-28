import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Porcentaje } from '../model/Porcentaje';

@Component({
  selector: 'app-descargandopaciente',
  templateUrl: './descargandopaciente.component.html',
  styleUrls: ['./descargandopaciente.component.css']
})
export class DescargandopacienteComponent implements OnInit {

 porcentaje: number;

  constructor(private service: PatientService,  private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {

    this.porcentaje = 0;

    this.route.params.subscribe(params => {
    
      this.service.porcentaje(params['id']).subscribe(data => this.calcularPorcentaje(data));
      });  
      
  }

  calcularPorcentaje(data: Porcentaje) : void {
    this.porcentaje = data.porcentaje;
        if (this.porcentaje >= 100) {
           this.router.navigate(['/results', data.patient.name]);
        } else {
          this.service.porcentaje(data.patient.id).subscribe(data => this.calcularPorcentaje(data));
        }
  }

}
