import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../Patient';

@Component({
  selector: 'app-pacientescandidatostractometry',
  templateUrl: './pacientescandidatostractometry.component.html',
  styleUrls: ['./pacientescandidatostractometry.component.css']
})
export class PacientescandidatostractometryComponent implements OnInit {

 idSerie: string;
 patients: Patient[];
 patient: Patient;

  constructor(private serieService: SerieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //Vamos a obtener a los pacientes candidatos dada la serie

    this.route.params.subscribe(params => {
      this.idSerie = params['serie'];
      this.serieService.tractometry(this.idSerie).subscribe(data =>  this.patients = data);
      this.serieService.loadPaciente(this.idSerie).subscribe(data => this.patient = data);
    });
  }
}
