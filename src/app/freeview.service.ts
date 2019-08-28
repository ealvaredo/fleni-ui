import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeviewService {

  constructor(private http: HttpClient) { }


  all() : Observable<String[]> {
    return this.http.get<String[]>(environment.apiUrl + '/freeview/all');
  }

  loadPatients(dir: String): Observable<String[]> {
    const params = new HttpParams()
    .set('dir', dir.toString());
    return this.http.get<String[]>(environment.apiUrl + '/freeview/load', {params});
  }

  freeView(dir: String, patient: String) {
    const params = new HttpParams()
    .set('dir', dir.toString())
    .set('patient', patient.toString());
    return this.http.get<String[]>(environment.apiUrl + '/freeview/freeview', {params});


  }
}
