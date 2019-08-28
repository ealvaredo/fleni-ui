import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Patient } from './Patient';
import { Observable, of } from 'rxjs';
import {PatientR} from './model/PatientR';
import {Porcentaje} from './model/Porcentaje';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  private patientUrl = environment.apiUrl;  // URL to web api

  constructor(private http: HttpClient, private http2: HttpClient) { 

    

  }


  searchEpilepticos(text: string) {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/epilepsias/' + text);
  }
  searchCognitivos(text: string) {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/cognitivos/' + text);
  }

  searchSeriesEnCola(text: string) {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/seriesencola/' + text);
  }

  searchSeriesProcesadas(text: string) {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/seriesprocesadas/' + text);
  }

  
  searchSeriesEnProceso(text: string) {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/seriesenproceso/' + text);
  }

  searchTumores(text: string) {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/tumores/' + text);
  }


  getPatients(serie: string, patient: string, study: string, patologicos: boolean) : Observable<Patient[]> {
    const params = new HttpParams()
    .set('serie', serie)
    .set('patient', patient)
    .set('study', study)
    .set('patologicos', (patologicos ? 'true' : 'false'));
    console.log(patologicos);
    
    return this.http.get<Patient[]>(this.patientUrl + '/patient/all', {params});
  }


  epilepsias(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/epilepsias');
  }
  cognitivos(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/cognitivos');
  }

  seriesEnCola(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/seriesencola');
  }
  seriesEnProceso(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/seriesenproceso');
  }

  seriesProcesadas(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/seriesprocesadas');
  }

  tumores(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + '/patient/tumores');
  }


  delete(patient: string): Observable<void> {
    

    const params = new HttpParams()
    .set('patient', patient)
    return this.http.get<void>(this.patientUrl + '/patient/delete', {params});
  }

  getPatientsResonador(name: String): Observable<PatientR[]> {

    const params = new HttpParams()
    .set('name', name.toString());
    return this.http.get<PatientR[]>(this.patientUrl + '/pacientesresonador/all', {params});
  }

  pacientesestudio(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + '/pacientesestudio/load');
  }


  descargar(id: String) : Observable<PatientR> {

    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.get<PatientR>(this.patientUrl + '/pacientesresonador/descargar', {params});
  
  }
  porcentaje(id: String) : Observable<Porcentaje> {

    const params = new HttpParams()
    .set('id', id.toString());
    return this.http.get<Porcentaje>(this.patientUrl + '/porcentaje/descarga', {params});
  
  }

  patologico(idPaciente: string): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPaciente);
    return this.http.get<void>(this.patientUrl + '/patient/patologico', {params});
  }


  sano(idPaciente: string): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPaciente);
    return this.http.get<void>(this.patientUrl + '/patient/sano', {params});
  }

  priorizarPaciente(idPaciente: string): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPaciente);
    return this.http.get<void>(this.patientUrl + '/patient/priorizar', {params});
  }


  cognitivo(idPaciente: string): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPaciente);
    return this.http.get<void>(this.patientUrl + '/patient/cognitivo', {params});
  }

  nocognitivo(idPaciente: string): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPaciente);
    return this.http.get<void>(this.patientUrl + '/patient/nocognitivo', {params});
  }

  calcularPorcentajeDescarga(): Observable<number> {
    return this.http.get<number>(this.patientUrl + '/patient/descargareporte');
  }

  

  descargarReporte(): Observable<Blob> {
    return null;
    /*
    let options = new HttpHeaders({responseType:  'blob' as 'blob' });
    return this.http2.get(this.patientUrl + '/patient/generarreporte', options)
    .pipe(map(res => res.blob()))*/
}

descargarReporteReducido(): Observable<Blob> {
  /*
  let options = new HttpHeaders({responseType:  'blob' as 'blob' });
  return this.http2.get(this.patientUrl + '/patient/generarreportereducido', options)
  .pipe(map(res => res.blob()))
  */
 return null;
}


 


}
