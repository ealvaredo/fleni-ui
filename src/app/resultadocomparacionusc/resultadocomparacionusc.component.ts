import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FreesurferComparedStats } from '../model/FreesurferComparedStats';

@Component({
  selector: 'app-resultadocomparacionusc',
  templateUrl: './resultadocomparacionusc.component.html',
  styleUrls: ['./resultadocomparacionusc.component.css']
})
export class ResultadocomparacionuscComponent implements OnInit {

  stats: FreesurferComparedStats; 
  idSerie: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private serieService: SerieService) { }

  ngOnInit() {
 this.route.params.subscribe(params => {
      this.idSerie = params['idSerie'];

      this.serieService.compararusc(params['idSerie']).subscribe(data => this.stats = data);
  });
 }

 freeviewLeftAparc2009() {
  this.serieService.freeviewLeftAparc2009(this.idSerie).subscribe();

}

freeviewRightAparc2009() {
  this.serieService.freeviewRightAparc2009(this.idSerie).subscribe();

}

freeviewLeft() {
  this.serieService.freeViewCompared(this.idSerie).subscribe();
}

freeviewRight() {
  this.serieService.freeviewRight(this.idSerie).subscribe();
}

refrescar() { 

  this.serieService.refrescarusc(this.idSerie).subscribe(data => this.stats = data);
}



}