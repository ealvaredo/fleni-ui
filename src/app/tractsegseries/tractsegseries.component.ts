import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from '../Serie';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tractsegseries',
  templateUrl: './tractsegseries.component.html',
  styleUrls: ['./tractsegseries.component.css']
})
export class TractsegseriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SerieService, private router: Router) { }


  status: String;
  series: Serie[];
  titulo: string;

  ngOnInit() {

    //Obtenemos el parámetro de status para poder filtrar el listado de series.
    this.route.params.subscribe(params => {
      this.status = params['status'];
      this.service.seriesByTactSegStatus(this.status).subscribe(data => this.series = data);
      this.titulo = "Series con procesos de TRACTSEG en estado " + this.status;
    });
  }


  buscar(texto: string) {

    this.service.findSeries(
      new HttpParams()
        .set("tractSegState", this.status.toString())
        .set("patientName", texto))
      .subscribe(data => this.series = data);
  }

  volver() {
    this.router.navigate(["/tractseg"]);
  }

}
