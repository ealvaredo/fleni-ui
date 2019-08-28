import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-pacientescandidatos',
  templateUrl: './pacientescandidatos.component.html',
  styleUrls: ['./pacientescandidatos.component.css']
})
export class PacientescandidatosComponent implements OnInit {

 idSerie: string;
 pacientes: Patient[];
 paciente: Patient;
 

  constructor( private route: ActivatedRoute,
    private router: Router, private serieService: SerieService) { }

  ngOnInit() {
    this.paciente = new Patient();

    this.route.params.subscribe(params => {
      this.idSerie = params['serie'];
      this.buscarMatches();
  });
  }


  buscarMatches() : void {
    this.serieService.buscarMatches(this.idSerie).subscribe(data => this.pacientes = data);

    this.serieService.loadPaciente(this.idSerie).subscribe(data => this.paciente = data);

  }

  onMrview(idPaciente: string) {
    this.serieService.mrview(idPaciente).subscribe();
  }

  verificado(idPaciente: string, value: boolean) {
    console.log(value);
    
    this.serieService.verificado(idPaciente, value).subscribe();
  }

  comparar() {

    this.router.navigate(['/resultadocomparacion', this.idSerie]);

  }

  verFreeSurfer(idPatient: string) {
    console.log(idPatient);
    
    this.serieService.freeViewPatient(idPatient).subscribe();
  }

  descartar(idPatient: string) {
    console.log(idPatient);
    
    this.serieService.descartar(idPatient).subscribe(data => this.buscarMatches());
  }

  volver() {
   

  }

}
