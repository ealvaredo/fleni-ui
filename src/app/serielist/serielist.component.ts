import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { Study } from '../Study';
import { Serie } from '../Serie';
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-serielist',
  templateUrl: './serielist.component.html',
  styleUrls: ['./serielist.component.css']
})
export class SerielistComponent implements OnInit {


  @Input() series: Serie[];
  @Input() titulo: string;
  @Output() onSearchChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onVolver: EventEmitter<void> = new EventEmitter<void>();


  busqueda: String;


  descagarImg: string;
  procesarImagen: string;
  trashImagen: string;
  dcm2niixImage: string;
  dtiImage: string;
  study: number;
  patient: String;
  studiesSeries: Serie[];

  selectedEstudio: string;
  patients: Patient[];
  patientStudies : Study[]; 
  estudio: Study;

  
  constructor(private serieService: SerieService,
    private route: ActivatedRoute,
    private router: Router ) { 

      this.busqueda = "";
      this.descagarImg = '../assets/images/eye.png';
      this.procesarImagen = '../assets/images/process.png';
      this.trashImagen = '../assets/images/trash.png';
      this.dcm2niixImage = '../assets/images/dcm2niix.png';
      this.dtiImage = '../assets/images/dti.jpg';


    }

  ngOnInit() {
  
  
  }


  verSeries(study: number) : void{
    this.onSearchChange.emit(this.busqueda.toString());
    //this.serieService.getSeries(study).subscribe(data => this.studiesSeries = data);
  }

  obtenerEstudio(study: number) : void {
    console.log("Obtener estudio " + study)
    this.serieService.loadEstudio(study).subscribe(data => this.estudio = data);
  }

  aumentarPrioridad(serie: string) : void {
    this.serieService.priorizar(serie).subscribe(data => this.verSeries(this.study));
  }

  cancelar(serie: string) : void {
    this.serieService.cancelar(serie).subscribe(data => this.verSeries(this.study));
  }


  procesar(serie: string) : void {
    this.serieService.procesar(serie).subscribe(data => this.verSeries(this.study));
  }
  
  freeView(serie: string) : void {
    console.log("ver freeview")
    this.serieService.freeView(serie).subscribe(data => this.descargarComando());
   // this.serieService.freeView(serie).subscribe();
  
  }

  descargarComando(): void {
    this.serieService.descargarComando().subscribe(blob => {
      var fileName = 'freeview.sh';
      importedSaveAs(blob, fileName)
    },
    error => {
      console.log(error);
      
    });
}


  dcm2nii(serie: string) : void {
    this.serieService.dcm2nii(serie).subscribe();
  }

  trackVis(serie: string) : void {
    this.serieService.trackVis(serie).subscribe();
  }
  
  dti(serie: string) : void {
    this.serieService.dti(serie).subscribe();
  }
  

  verImagenes(serie: string) : void {
    console.log("serie");
    
    this.serieService.mrviewForSerie(serie).subscribe();

    //this.router.navigate(['/images', serie ]);
  }

  volver() : void {

    this.onVolver.emit();

  }

  comparar(serie: string) : void  {
    this.router.navigate(['/pacientescandidatos', serie ]);
  }

  compararEscala(serie: string) : void  {
    this.router.navigate(['/pacientescandidatos', serie, true ]);
  }


  compararUsc(serie: string) : void  {
    this.router.navigate(['/resultadocomparacionusc', serie ]);
  }

  compararUscEscala(serie: string) : void  {
    this.router.navigate(['/resultadocomparacionusc', serie, true ]);
  }

  compararFA(serie: string) : void  {
    this.router.navigate(['/pacientescandidatosfa', serie ]);
  }

  visualizarFA(serie: string) : void {
    console.log(serie);
    this.serieService.verFa(serie).subscribe();
  }


  visualizarTBSS(serie: string) : void {
    console.log(serie);
    this.serieService.verTBSS(serie).subscribe();
  }


  buscar(text: string): void {
    //console.log(text);
    this.busqueda = text;
    this.onSearchChange.emit(text);
  }  


  reprocesarFA(serie: string) : void {
    this.serieService.changeFaState(serie, "QUEUE").subscribe(data => this.verSeries(this.study));
  }

  reprocesarNII(serie: string) : void {
    this.serieService.changeNIIState(serie, "QUEUE").subscribe(data => this.verSeries(this.study));
  }

  reprocesarTBSS(serie: string) : void {
    this.serieService.changeTbssState(serie, "QUEUE").subscribe(data => this.verSeries(this.study));
  }

  eliminarSerie(serie: string) : void {
    this.serieService.eliminarSerie(serie).subscribe(data => this.verSeries(this.study));
  }

  tractometry(serie: string) : void {
    this.router.navigate(['/pacientescandidatostractometry', serie ]);
  }


}
