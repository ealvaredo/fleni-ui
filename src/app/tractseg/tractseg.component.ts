import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tractseg',
  templateUrl: './tractseg.component.html',
  styleUrls: ['./tractseg.component.css']
})
export class TractsegComponent implements OnInit {

  cantidadProcesadas: Number = -1;
  cantidadError: Number = -1;
  cantidadCola: Number = -1;
  cantidadProcesando: Number = -1;
  cantidadEsperando: Number = -1;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {


    this.http.get<Number>(environment.apiUrl + '/launcher/tractseg').subscribe(
      data => this.cantidadProcesadas = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tractsegerror').subscribe(
      data => this.cantidadError = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tractsegencola').subscribe(
      data => this.cantidadCola = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tractsegprocesando').subscribe(
      data => this.cantidadProcesando = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tractsegesperando').subscribe(
      data => this.cantidadEsperando = data
    );


  }


  error() {
    this.router.navigate(['/tractsegseries', 'ERROR']);

  }

  procesando() {
    this.router.navigate(['/tractsegseries', 'PROCESSING']);

  }


  cola() {
    this.router.navigate(['/tractsegseries', 'QUEUE']);

  }

  procesado() {
    this.router.navigate(['/tractsegseries', 'PROCESSED']);

  }

  esperando() {
    this.router.navigate(['/tractsegseries', 'WAITTING']);

  }

}
