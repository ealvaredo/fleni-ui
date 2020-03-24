import { Component, OnInit } from '@angular/core';
import { ResonadorService } from '../resonador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  cantidadCognitivos: Number;
  cantidadPacientes: Number;
  cantidadPacientesResonador: Number;
  cantidadEpilesias: Number;
  cantidadTumores: Number;
  cantidadProcesados: Number;
  cantidadencola: Number;
  cantidadProcesando: Number;
  cantidadTbss: Number;
  cantidadTractSeg: Number;

  ngOnInit() {

    this.http.get<Number>(environment.apiUrl + '/launcher/cognitivos').subscribe(
      data => this.cantidadCognitivos = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/pacientes').subscribe(
      data => this.cantidadPacientes = data
    );


    this.http.get<Number>(environment.apiUrl + '/launcher/pacientesresonador').subscribe(
      data => this.cantidadPacientesResonador = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/epilepsias').subscribe(
      data => this.cantidadEpilesias = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tumores').subscribe(
      data => this.cantidadTumores = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/procesadas').subscribe(
      data => this.cantidadProcesados = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/encola').subscribe(
      data => this.cantidadencola = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/procesando').subscribe(
      data => this.cantidadProcesando = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tbss').subscribe(
      data => this.cantidadTbss = data
    );

    this.http.get<Number>(environment.apiUrl + '/launcher/tractseg').subscribe(
      data => this.cantidadTractSeg = data
    );


  }


  search(): void {

    this.router.navigate(['/search']);
  }

  admin(): void {

    this.router.navigate(['/admin']);
  }

  import(): void {
    this.router.navigate(['/databases']);
  }

  freeSurfer(): void {
    this.router.navigate(['/freesurferdata']);
  }

  viewPatients(): void {
    this.router.navigate(['/results', "", "", ""]);
  }

  pacientesResonador(): void {
    this.router.navigate(['/buscarpacientesresonador']);
  }

  pacientesEstudio(): void {
    this.router.navigate(['/pacientesestudio']);
  }

  pacientesPatologicos(): void {
    this.router.navigate(['/pacientespatologicos', "true"]);
  }

  epilepsias(): void {

    this.router.navigate(['/epilepsias']);
  }

  cognitivos(): void {

    this.router.navigate(['/cognitivos']);
  }

  tumores(): void {

    this.router.navigate(['/tumores']);
  }

  seriesencola(): void {

    this.router.navigate(['/seriesencola']);
  }

  seriesprocesando(): void {

    this.router.navigate(['/seriesenproceso']);
  }

  seriesProcesadas(): void {
    this.router.navigate(['/seriesprocesadas'])
  }
  eventos(): void {
    this.router.navigate(['/log'])
  }
  tbss(): void {
    this.router.navigate(['/tbsslauncher'])
  }

  tractSeg(): void {
    this.router.navigate(['/tractseg'])
  }



}
