import { Component, OnInit } from '@angular/core';
import {ImportdatabaseService} from '../importdatabase.service';
import { SerieService } from '../serie.service';
import {ImportedSerie} from '../ImportedSerie';

@Component({
  selector: 'app-importdatabase',
  templateUrl: './importdatabase.component.html',
  styleUrls: ['./importdatabase.component.css']
})
export class ImportdatabaseComponent implements OnInit {

 directories: ImportedSerie[];
 descagarImg: string;
   procesarImagen: string;
   trashImagen: string;
   dcm2niixImage: string;
   dtiImage: string;

  constructor(private importDatabase: ImportdatabaseService, private serieService: SerieService) {

    this.descagarImg = '../assets/images/eye.png';
    this.procesarImagen = '../assets/images/process.png';
    this.trashImagen = '../assets/images/trash.png';
    this.dcm2niixImage = '../assets/images/dcm2niix.png';
    this.dtiImage = '../assets/images/dti.jpg';

   }

  ngOnInit() {

      this.importDatabase.getFolders().subscribe(data => this.directories = data);
      
  }


  dcm2nii(serie: string) : void {
    this.serieService.importDcm2niix(serie).subscribe();
  }

  dti(serie: string) : void {
    this.serieService.importDti(serie).subscribe();
  }

  trackVis(serie: string) : void {
  this.serieService.trackVisImported(serie).subscribe();
  }

}
