import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from '../Serie';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tbssseries',
  templateUrl: './tbssseries.component.html',
  styleUrls: ['./tbssseries.component.css']
})
export class TbssseriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SerieService) { }


  status: String;
  series: Serie[];
  titulo: string;

  ngOnInit() {

    //Obtenemos el parámetro de status para poder filtrar el listado de series.
    this.route.params.subscribe(params => {
      this.status = params['status'];
      this.service.seriesByTbssStatus(this.status).subscribe(data => this.series = data);
      this.titulo = "Series con procesos de TBBS en estado " + this.status;  
  });
}


buscar(texto) { 

  this.service.findSeries(
    new HttpParams()
    .set("tbbsState", this.status.toString())
    .set("patientName", texto.toString()))
    .subscribe(data => this.series = data);
}

}
