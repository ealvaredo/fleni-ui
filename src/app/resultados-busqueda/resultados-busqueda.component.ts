import { Component, OnInit } from '@angular/core';
import { ResonadorService } from '../resonador.service';
import { PatientService } from '../patient.service';
import { StudyService } from '../study.service';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { Study } from '../Study';
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {



  patients: Patient[];
  patient: string;
  selectedSerie: string;
  selectedEstudio: string;
  patologicos: boolean;
  porcentajeDescaga: number;





  constructor(private pacienteService: PatientService, private router: Router, 
    private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit() {
        

    this.route.params.subscribe(params => {


      if (params['patient']) {
        this.patient = params['patient'];
      }
      this.selectedEstudio = params['study'];
      this.selectedSerie = params['serie'];
      console.log(params['patologicos']);

      if (null != params['patologicos']) {
        this.patologicos = true;
      }
      this.search();
    });


  }

  verEstudios(paciente) {
    this.router.navigate(['/studies', paciente, paciente]);
  }

  buscar(texto) {
    console.log(texto);
    this.patient = texto;
    this.search();
  }


  /*
  descagarImg: string;
  procesarImagen: string;
  trashImagen: string;
  dcm2niixImage: string;
  dtiImage: string;
  patient: string;
  selectedSerie: string;
  selectedEstudio: string;
  patients: Patient[];
  patientStudies: Study[];
  patologicos: boolean;
  porcentajeDescaga: number;



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
    this.patologicos = false;
    this.patient = "";
  }

  ngOnInit() {



    this.route.params.subscribe(params => {


      if (params['patient']) {
        this.patient = params['patient'];
      }
      this.selectedEstudio = params['study'];
      this.selectedSerie = params['serie'];
      console.log(params['patologicos']);

      if (null != params['patologicos']) {
        this.patologicos = true;
      }
      this.search();
    });

  }


  /**
   * Dispara la búsqueda
   */
  search(): void {
    //this.resonadorService.start(this.selectedSerie, this.patient,this.selectedEstudio).subscribe();
    this.getTime();
  }

  getTime(): void {

    // var interval  = setInterval( () =>    
    // {
    this.getPatients();
    // },5000);
  }


  getPatients(): void {
    this.patientService.getPatients(this.selectedSerie, this.patient, this.selectedEstudio, this.patologicos).subscribe(data => this.patients = data);
  }

  /*
  verEstudios(paciente: string): void {
    console.log(paciente);
    console.log(this.patient);

    this.router.navigate(['/studies', paciente, this.patient]);
  }

*/
  volver(): void {
    this.router.navigate(['/buscarpacientesresonador']);
  }

  /*
  deletePatient(idPaciente: string) {
    this.patientService.delete(idPaciente).subscribe(data => this.search());
  }
*/
/*
  patologico(idPaciente: string) {
    this.patientService.patologico(idPaciente).subscribe(data => this.search());
  }
*/
/*  
sano(idPaciente: string) {
    this.patientService.sano(idPaciente).subscribe(data => this.search());
  }
*/
/*
  generarReporte() {
  this.patientService.generarReporte().subscribe(data => this.descargarReporte());
  }
*/
  generarReporte() {
    
    this.patientService.calcularPorcentajeDescarga().subscribe(data => this.actualizarPorcentaje(data));
      
    
    this.patientService.descargarReporte().subscribe( blob => {
      var fileName = 'report.xlsx';
      importedSaveAs(blob, fileName)
    },
    error => {
      console.log(error);
      
    });

  }

  generarReporteReducido() {
    
    this.patientService.calcularPorcentajeDescarga().subscribe(data => this.actualizarPorcentaje(data));
      
    
    this.patientService.descargarReporteReducido().subscribe( blob => {
      var fileName = 'report.xlsx';
      importedSaveAs(blob, fileName)
    },
    error => {
      console.log(error);
      
    });

  }

  actualizarPorcentaje(data: number): void {
    this.porcentajeDescaga = data;
    if (data < 100) {
      this.patientService.calcularPorcentajeDescarga().subscribe(data => this.actualizarPorcentaje(data));
    }
  }
/*
  onSearchChange(text: string) {
   
    this.patient = text;
    this.search();
  }
 */

}
