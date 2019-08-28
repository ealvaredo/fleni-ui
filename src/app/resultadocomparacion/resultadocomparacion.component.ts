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

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idSerie = params['idSerie'];

      this.serieService.comparar(params['idSerie']).subscribe(data => this.stats = data);

  });

  }


  freeviewLeftAparc2009() {
    this.serieService.freeviewLeftAparc2009(this.idSerie).subscribe();

  }

  freeviewAparcPial() {
    this.serieService.freeviewAparcPial(this.idSerie).subscribe();
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

  freeviewLeftDKT() : void {
    this.serieService.freeviewLeftDKT(this.idSerie).subscribe();
  }

  freeviewRightDKT() {
    this.serieService.freeviewRightDKT(this.idSerie).subscribe();
  }

  compararGrupoEspesorCortialLeft() {
    this.serieService.compararGrupoEspesorCortialLeft(this.idSerie).subscribe();
  }

  compararGrupoVolumetricoLeft() {
    this.serieService.compararGrupoVolumetricoLeft(this.idSerie).subscribe();
  }

  compararGrupoEspesorCortialRight() {
    this.serieService.compararGrupoEspesorCortialRight(this.idSerie).subscribe();
  }

  compararGrupoVolumetricoRight() {
    this.serieService.compararGrupoVolumetricoRight(this.idSerie).subscribe();
  }

  compararGrupoEspesorCortialLeftAparc2009() {
    this.serieService.compararGrupoEspesorCortialAparc2009(this.idSerie).subscribe();
  }

  compararGrupoVolumetricoLeftAparc2009() {
    this.serieService.compararGrupoVolumetricoAparc2009(this.idSerie).subscribe();
  }

  compararGrupoEspesorCortialRightAparc2009() {
    this.serieService.compararGrupoEspesorCortialAparc2009(this.idSerie).subscribe();
  }

  compararGrupoVolumetricoRightAparc2009() {
    this.serieService.compararGrupoVolumetricoAparc2009(this.idSerie).subscribe();
  }


  
}
