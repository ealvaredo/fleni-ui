import { Component, OnInit , ViewChild} from '@angular/core';
import { ResonadorService } from '../resonador.service';
import {Dicom} from '../Dicom';
import { Observable, interval } from '../../../node_modules/rxjs';
import * as FileSaver from 'file-saver';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { StudyService } from '../study.service';
import { Study } from '../Study';
import { SerieService } from '../serie.service';
import { Serie } from '../Serie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

   resonadores: string[];
   resonador: string;
   patients: Patient[];
   studies: string[];
   processTime: number;
   selectedSerie: string;
   series: string[];
   descagarImg: string;
   procesarImagen: string;
   trashImagen: string;
   dcm2niixImage: string;
   dtiImage: string;

   displayedColumns: string[] = ['position', 'name', 'weight'];
   selectedPatient: string;
   selectedStudySerie: string;
   patient?: string;
   selectedEstudio: string;

  constructor(private resonadorService: ResonadorService, 
    private patientService: PatientService,
    private studyService: StudyService,
    private serieService: SerieService,
    private route: ActivatedRoute,
    private router: Router, ) {
    this.descagarImg = '../assets/images/eye.png';
    this.procesarImagen = '../assets/images/process.png';
    this.trashImagen = '../assets/images/trash.png';
    this.dcm2niixImage = '../assets/images/dcm2niix.png';
    this.dtiImage = '../assets/images/dti.jpg';
    this.patient;
    this.selectedEstudio = null;
  }

  ngOnInit() {
   this.getResonadores();
   this.getStudies();
   this.processTime = 0;
   this.getSeries();
   this.selectedSerie = null;
   this.getPatients();
  }


  getTime() : void {
    
    
this.processTime = 0;
    var interval  = setInterval( () =>    
    {

      this.getPatients();
      

    },5000);
  
  
  }

  getSeries() : void {
    this.resonadorService.getSeries().subscribe(data=> this.series = data, error => this.router.navigate['/error']);
  }
 
  getPatients() : void {
    this.patientService.getPatients(this.selectedSerie, this.patient,this.selectedEstudio, true).subscribe(data=> this.patients = data);
  }

 getResonadores() : void {
   this.resonadorService.getResonadores().subscribe(data=> this.resonadores = data);
 }

 getStudies(): void {
  this.resonadorService.getStudies().subscribe(data => this.studies = data);
}

/**
 * Dispara la búsqueda
 */
search() : void {
  this.router.navigate(['/results', this.patient ]);
  this.resonadorService.start(this.selectedSerie, this.patient,this.selectedEstudio).subscribe();
  this.getTime();
}


descargar(fileName: string) : void {

  this.selectedSerie = fileName;

}


volver() : void {
  this.router.navigate( ['/']);
}










deletePatient(patient: string) : void {
  
  this.patientService.delete(patient).subscribe();
}



}
