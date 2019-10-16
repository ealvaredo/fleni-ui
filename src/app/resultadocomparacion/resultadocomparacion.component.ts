import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../serie.service';
import { FreesurferStat} from '../model/FreesurferStat';
import {FreesurferComparedStats} from '../model/FreesurferComparedStats';
import { FreesurferStats } from '../model/FreesurferStats';

@Component({
  selector: 'app-resultadocomparacion',
  templateUrl: './resultadocomparacion.component.html',
  styleUrls: ['./resultadocomparacion.component.css']
})
export class ResultadocomparacionComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private serieService: SerieService) { }

stats: FreesurferComparedStats; 
idSerie: string;
escala: Boolean = false;

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idSerie = params['idSerie'];
      
      if (null != params['escala']) {
        this.escala = params['escala'];
      }

      this.serieService.comparar(params['idSerie'], this.escala).subscribe(data => this.stats = data);

  });

  }


  freeviewLeftAparc2009() {
    this.serieService.freeviewLeftAparc2009(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));

  }

  freeviewAparcPial() {
    this.serieService.freeviewAparcPial(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  freeviewRightAparc2009() {
    this.serieService.freeviewRightAparc2009(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));

  }

  freeviewLeft() {
    this.serieService.freeViewCompared(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  freeviewRight() {
    this.serieService.freeviewRight(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  freeviewLeftDKT() : void {
    this.serieService.freeviewLeftDKT(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  freeviewRightDKT() {
    this.serieService.freeviewRightDKT(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoEspesorCortialLeft() {
    this.serieService.compararGrupoEspesorCortialLeft(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoVolumetricoLeft() {
    this.serieService.compararGrupoVolumetricoLeft(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoEspesorCortialRight() {
    this.serieService.compararGrupoEspesorCortialRight(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoVolumetricoRight() {
    this.serieService.compararGrupoVolumetricoRight(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoEspesorCortialLeftAparc2009() {
    this.serieService.compararGrupoEspesorCortialAparc2009(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoVolumetricoLeftAparc2009() {
    this.serieService.compararGrupoVolumetricoAparc2009(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoEspesorCortialRightAparc2009() {
    this.serieService.compararGrupoEspesorCortialAparc2009(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararGrupoVolumetricoRightAparc2009() {
    this.serieService.compararGrupoVolumetricoAparc2009(this.idSerie).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }

  compararArea(label: String) {
    this.serieService.compararArea(this.idSerie, label).subscribe(data => data, error =>

      this.router.navigate(['/error' , error]));
  }


  refrescar() { 
    console.log(this.escala);
    this.stats = new FreesurferComparedStats();
    this.serieService.refrescar(this.idSerie, this.escala).subscribe(data => this.stats = data);
  }


  
}
