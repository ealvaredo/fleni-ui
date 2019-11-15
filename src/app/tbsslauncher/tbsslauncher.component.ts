import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tbsslauncher',
  templateUrl: './tbsslauncher.component.html',
  styleUrls: ['./tbsslauncher.component.css']
})
export class TbsslauncherComponent implements OnInit {


  cantidadProcesadas: Number;
  cantidadError: Number;
  cantidadCola: Number;
  cantidadProcesando: Number;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {


    this.http.get<Number>(environment.apiUrl + '/launcher/tbss').subscribe(
      data => this.cantidadProcesadas = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tbsserror').subscribe(
      data => this.cantidadError = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tbsscola').subscribe(
      data => this.cantidadCola = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tbssprocesando').subscribe(
      data => this.cantidadProcesando = data
    );



  }


  error() {
    this.router.navigate(['/tbssseries', 'ERROR']);

  }

  procesando() {
    this.router.navigate(['/tbssseries', 'PROCESSING']);

  }


  cola() {
    this.router.navigate(['/tbssseries', 'QUEUE']);

  }

  procesado() {
    this.router.navigate(['/tbssseries', 'PROCESSED']);

  }

}
