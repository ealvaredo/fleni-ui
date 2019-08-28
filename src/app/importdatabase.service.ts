import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ImportedSerie } from './ImportedSerie';
import { Database } from './model/Database';
import { catchError } from 'rxjs/operators';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class ImportdatabaseService {


  constructor(private http: HttpClient) { }



  getFolders() : Observable<ImportedSerie[]> {
    return this.http.get<ImportedSerie[]>(environment.apiUrl + '/importdatabase/all');
  }

  getDatabases() : Observable<Database[]> {
    return this.http.get<Database[]>(environment.apiUrl + '/importdatabase/all');
  }

  load(id: string): Observable<Database> {

    const params = new HttpParams().set('id', id);

    return this.http.get<Database>(environment.apiUrl + '/importdatabase/load', {params});
  }

  save(database: Database): Observable<void> {
      
    return this.http.post<void>(environment.apiUrl+ '/importdatabase/save', database).pipe(
          catchError (err => 
            {
              console.log("Error en llamado" + err.error.message);
              return throwError(err.error.message);
            }
          )
      )
  }


  loadPatients(id: string): Observable<Patient[]> {

    const params = new HttpParams().set('id', id);

    return this.http.get<Patient[]>(environment.apiUrl + '/importdatabase/loadPatients', {params});
  }

  toDti(id: string) : Observable<void> {

    const params = new HttpParams().set('idPatient', id);

    return this.http.get<void>(environment.apiUrl + '/importdatabase/dti', {params});

  }

  trackVis(id: string) : Observable<void> {

    const params = new HttpParams().set('idPatient', id);

    return this.http.get<void>(environment.apiUrl + '/importdatabase/trackvis', {params});

  }

  delete(id: string) : Observable<void> {

    const params = new HttpParams().set('idDatabase', id);
    return this.http.get<void>(environment.apiUrl + '/importdatabase/delete', {params});
  }


}
