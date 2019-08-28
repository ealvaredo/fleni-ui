import { Injectable } from '@angular/core';
import { Label } from './model/Label';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LabelserviceService {

  constructor(private http: HttpClient) { }


 save(label: Label) : Observable<void> {

  return this.http.post<void>(environment.apiUrl+ '/admin/label/save', label).pipe(
    catchError (err => 
      {
        console.log("Error en llamado" + err.error.message);
        return throwError(err.error.message);
      }
    )
);}

}
