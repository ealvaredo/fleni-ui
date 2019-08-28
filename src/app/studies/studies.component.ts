import { Component, OnInit } from '@angular/core';
import { ResonadorService } from '../resonador.service';
import { PatientService } from '../patient.service';
import { StudyService } from '../study.service';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { Study } from '../Study';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  descagarImg: string;
  procesarImagen: string;
  trashImagen: string;
  dcm2niixImage: string;
  dtiImage: string;
  patient: string;

  selectedEstudio: string;
  patients: Patient[];
  patientStudies : Study[];
  search: String;
  paciente: Patient;



  constructor(private studyService: StudyService,
    private serieService: SerieService,
    private route: ActivatedRoute,
    private router: Router ) { 

      
      this.descagarImg = '../assets/images/eye.png';
      this.procesarImagen = '../assets/images/process.png';
      this.trashImagen = '../assets/images/trash.png';
      this.dcm2niixImage = '../assets/images/dcm2niix.png';
      this.dtiImage = '../assets/images/dti.jpg';

    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patient = params['patient'];
      this.search = params['search'];
      this.verEstudios(this.patient);
      this.loadPaciente(this.patient);
  });
  }

  verEstudios(paciente: string) : void {
    this.studyService.getStudies(paciente).subscribe(data => this.patientStudies = data);
  }

  loadPaciente(paciente: string) : void {
    this.studyService.loadPaciente(paciente).subscribe(data => this.paciente = data);
  }


  verSeries(study: number) : void{
    this.router.navigate(['/series', study, this.patient]);
  }

  volver() : void {
    this.router.navigate(['/results', this.search]);
  }

}
