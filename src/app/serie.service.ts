import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Serie } from './Serie';
import { Observable, of } from 'rxjs';
import { Patient } from './Patient';
import { FreesurferStat } from './model/FreesurferStat';
import { PacientesComparados } from './model/PacientesComparados';
import { FreesurferComparedStats } from './model/FreesurferComparedStats';
import { Study } from './Study';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  
  private studyUrl = environment.apiUrl + '/series';  // URL to web api

  constructor(private http: HttpClient, private http2: HttpClient) { 

    

  }

  comparar(idPaciente: string, escala: Boolean): Observable<FreesurferComparedStats> {
    const params = new HttpParams()
    .set('idSerie', idPaciente).set('escala', escala.toString());
    return this.http.get<FreesurferComparedStats>(this.studyUrl + '/comparar', {params});
  }

  /**
   * Vuelve a realizar la comparación
   * @param idPaciente 
   */
  refrescar(idPaciente: string, escala: Boolean): Observable<FreesurferComparedStats> {
    const params = new HttpParams()
    .set('idSerie', idPaciente).set('escala', escala.toString());
    return this.http.get<FreesurferComparedStats>(this.studyUrl + '/refrescar', {params});
  
  }

  refrescarusc(idPaciente: string, escala: Boolean): Observable<FreesurferComparedStats> {
    const params = new HttpParams()
    .set('idSerie', idPaciente).set('escala', escala.toString());
    return this.http.get<FreesurferComparedStats>(this.studyUrl + '/refrescarusc', {params});
  }

  compararusc(idPaciente: string, escala: Boolean): Observable<FreesurferComparedStats> {
    console.log(escala);
    console.log('escala',escala.toString());
    const params = new HttpParams()
    .set('idSerie', idPaciente).set('escala', escala.toString());
    return this.http.get<FreesurferComparedStats>(this.studyUrl + '/compararusc', {params});

  }


  compararFA(idPaciente: string): Observable<void> {
    const params = new HttpParams()
    .set('idSerie', idPaciente)
    return this.http.get<void>(this.studyUrl + '/compararfa', {params});

  }

  descartar(idPatient: string): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPatient)
    return this.http.get<void>(this.studyUrl + '/descartar', {params});
  }
 


  mrview(idPaciente: string): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPaciente)
    return this.http.get<void>(this.studyUrl + '/mrview', {params});

  }
  mrviewForSerie(idPaciente: string): Observable<void> {
    console.log("serie");
    const params = new HttpParams()
    .set('idSerie', idPaciente)
    return this.http.get<void>(this.studyUrl + '/mrviewserie', {params});

  }


  

  verificado(idPaciente: string, value: boolean): Observable<void> {
    const params = new HttpParams()
    .set('idPaciente', idPaciente).set('verificado', String(value).toString());
    return this.http.get<void>(this.studyUrl + '/verificado', {params});
  }

  buscarMatches(idSerie: string): Observable<Patient[]> {
    const params = new HttpParams()
    .set('idSerie', idSerie)
    return this.http.get<Patient[]>(this.studyUrl + '/buscarmatches', {params});
  }

  buscarMatchesFA(idSerie: string): Observable<Patient[]> {
    const params = new HttpParams()
    .set('idSerie', idSerie)
    return this.http.get<Patient[]>(this.studyUrl + '/buscarmatchesfa', {params});
  }


  loadPaciente(idSerie: string): Observable<Patient> {
    const params = new HttpParams()
    .set('idSerie', idSerie);
    return this.http.get<Patient>(this.studyUrl + '/loadpatient', {params});
  }


  getSeries(study: number) : Observable<Serie[]> {
    return this.http.post<Serie[]>(this.studyUrl + '/all', study);
  }

  loadEstudio(study: number) : Observable<Study> {
    const params = new HttpParams()
    .set('idEstudio', study.toString());
    return this.http.get<Study>(this.studyUrl + '/loadPatientByStudy', {params});
  }


  procesar(serie: string) : Observable<void> {
    return this.http.post<void>(this.studyUrl + '/procesar', serie);
  }

  priorizar(serie: string) : Observable<void> {
    return this.http.post<void>(this.studyUrl + '/priorizar', serie);
  }

  cancelar(serie: string) : Observable<void> {
    return this.http.post<void>(this.studyUrl + '/cancelar', serie);
  }


  freeView(serie: string) : Observable<void> {
    return this.http.post<void>(this.studyUrl + '/freeView', serie);
  }

  freeViewCompared(serie: string) : Observable<void> {
    return this.http.post<void>(this.studyUrl + '/freeViewCompared', serie);
  }

  freeviewLeftAparc2009(idSerie: string): Observable<void> {
    return this.http.post<void>(this.studyUrl + '/freeviewLeftAparc2009', idSerie);
  }

  freeviewAparcPial(idSerie: string): Observable<void> {
    return this.http.post<void>(this.studyUrl + '/freeviewAparcPial', idSerie);
  }


  freeviewRightAparc2009(idSerie: string):  Observable<void>  {
    return this.http.post<void>(this.studyUrl + '/freeviewRightAparc2009', idSerie);
  }
  

  freeviewRight(idSerie: string):  Observable<void> {
    return this.http.post<void>(this.studyUrl + '/freeviewRight', idSerie);
  }

  
  freeviewLeftDKT(idSerie: string):  Observable<void> {
    return this.http.post<void>(this.studyUrl + '/freeviewLeftDKT', idSerie);
  }


  
  freeviewRightDKT(idSerie: string):  Observable<void> {
    return this.http.post<void>(this.studyUrl + '/freeviewRightDKT', idSerie);
  }



  freeViewPatient(patient: string) : Observable<void> {
  
    
    return this.http.post<void>(this.studyUrl + '/freeViewPatient', patient);
  }

  trackVis(serie: string) : Observable<void> {
    console.log(serie);
    
    return this.http.post<void>(this.studyUrl + '/trackVis', serie);
  }

  verFa(serie: string) : Observable<void> {
    console.log(serie);
    return this.http.post<void>(this.studyUrl + '/fsl', serie);
  }


  trackVisImported(serie: string) : Observable<void> {
    console.log(serie);
    
    return this.http.post<void>(this.studyUrl + '/trackVisImported', serie);
  }


  dcm2nii(serie: string) : Observable<void> {

    const params = new HttpParams()
    .set('serie', serie)
    return this.http.get<void>(this.studyUrl + '/dcm2niix', {params});
  }

  importDcm2niix(serie: string) : Observable<void> {
    console.log(serie);
    
    const params = new HttpParams()
    .set('dir', serie)
    return this.http.get<void>(environment.apiUrl + '/importdatabase/dcmtoniix', {params});
  }


  dti(serie: string) : Observable<void> {

    const params = new HttpParams()
    .set('serie', serie)
    return this.http.get<void>(this.studyUrl + '/dti', {params});
  }

  importDti(serie: string) : Observable<void> {

    const params = new HttpParams()
    .set('dir', serie)
    return this.http.get<void>(environment.apiUrl + '/importdatabase/dti', {params});
  }

  descargarComando(): Observable<Blob>{	
    const options = { responseType: 'blob' as 'json' }	
		return this.http.get<Blob>(environment.apiUrl + '/download/freeviewcommand', options);
   }

/*
  descargarComando(): Observable<Blob> {
    


    let options = new RequestOptions({responseType: ResponseContentType.Blob });
    return this.http2.get(environment.apiUrl + '/download/freeviewcommand', options)
    .pipe(map(res => res.blob()))
}
*/
compararGrupoVolumetricoLeft(idSerie: string) {
  return this.http.post<void>(this.studyUrl + '/compararGrupoVolumetricoLeft', idSerie);
}

compararGrupoVolumetricoRight(idSerie: string) {
  return this.http.post<void>(this.studyUrl + '/compararGrupoVolumetricoRight', idSerie);
}

compararGrupoEspesorCortialLeft(idSerie: string) {
  return this.http.post<void>(this.studyUrl + '/compararGrupoEspesorCortialLeft', idSerie);
}

compararGrupoEspesorCortialRight(idSerie: string) {
  return this.http.post<void>(this.studyUrl + '/compararGrupoEspesorCortialRight', idSerie);
}

compararGrupoVolumetricoAparc2009(idSerie: string) {
  return this.http.post<void>(this.studyUrl + '/compararGrupoVolumetricoAparc2009', idSerie);
}

compararGrupoEspesorCortialAparc2009(idSerie: string) {
  return this.http.post<void>(this.studyUrl + '/compararGrupoEspesorCortialAparc2009', idSerie);
}

compararArea(idSerie: string, label: String) {
  return this.http.post<void>(this.studyUrl + '/compararArea', {idSerie, label});
}

compararCurvatura(idSerie: string, label: String) {
  var surface: String = "meancurv";
  return this.http.post<void>(this.studyUrl + '/compararSurface', {idSerie, label, surface});
}


}