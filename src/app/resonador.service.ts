import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Dicom } from './Dicom';
import { HttpParams } from '@angular/common/http';
import { PorcentajeDescargaResonador } from './model/PorcentajeDescargaResonador';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResonadorService {

  private resonadorUrl = environment.apiUrl;  // URL to web api

  constructor(private http: HttpClient) { 

    

  }

start(serie: string, patient: string, study: string): Observable<void> {

    const params = new HttpParams()
    .set('serie', serie)
    .set('patient', patient)
    .set('study', study); 
  

    return this.http.get<void>(this.resonadorUrl+ '/resonador/start', {params});
  }


  getSeries() : Observable<string[]> {
    return this.http.get<string[]>(this.resonadorUrl + '/resonador/series');
  }

  getStudies(): Observable<string[]> {
    
    return this.http.get<string[]>(this.resonadorUrl+ '/resonador/studies');
  }


  getFiles(serie: number): Observable<Dicom[]> {
    
    return this.http.post<Dicom[]>(this.resonadorUrl+ '/resonador/files',  serie);
      
  }

  getResonadores(): Observable<string[]> {
    
    this.log("dsads");
    return this.http.get<string[]>(this.resonadorUrl+ '/resonador/all')
      .pipe(
        tap(resolnador => this.log('fetched heroes')),
        catchError(this.handleError('getResonadors', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  porcentaje() : Observable<PorcentajeDescargaResonador[]> {

    return this.http.get<PorcentajeDescargaResonador[]>(this.resonadorUrl + '/porcentajes/resonador');
  }

  refrescar() : Observable<void> {

    return this.http.get<void>(this.resonadorUrl + '/porcentajes/refrescar');
  }

}
