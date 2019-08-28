import { Component, OnInit } from '@angular/core';
import { ResonadorService } from '../resonador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dicom } from '../Dicom';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

 serie: number;
 files: Dicom[];
 descagarImg: string;
  
 constructor(private resonadorService: ResonadorService, 
    private route: ActivatedRoute,
    private router: Router, ) { 

      this.descagarImg = '../assets/images/eye.png';

    }

  ngOnInit() {
  
    this.route.params.subscribe(params => {
      this.serie = params['serie'];
      this.verImagenes(this.serie);
  });
  }


  verImagenes(serie: number) : void {
    this.resonadorService.getFiles(serie).subscribe(
      data => this.files = data);
  }
}
