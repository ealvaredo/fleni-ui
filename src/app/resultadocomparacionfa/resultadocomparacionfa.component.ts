import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-resultadocomparacionfa',
  templateUrl: './resultadocomparacionfa.component.html',
  styleUrls: ['./resultadocomparacionfa.component.css']
})
export class ResultadocomparacionfaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private serieService: SerieService) { }



  ngOnInit() {

    this.route.params.subscribe(params => {
     
      this.serieService.compararFA(params['idSerie']).subscribe();

  });

  }

}
