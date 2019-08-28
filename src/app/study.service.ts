import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Study } from './Study';
import { Observable, of } from 'rxjs';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  private studyUrl = environment.apiUrl + '/studies';  // URL to web api

  constructor(private http: HttpClient) { 

    

  }

  getStudies(patient: string) : Observable<Study[]> {
    return this.http.post<Study[]>(this.studyUrl + '/all', patient);
  }

  loadPaciente(patient: string) : Observable<Patient> {
    return this.http.post<Patient>(this.studyUrl + '/loadPatient', patient);
  }


}