import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

 eventos: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<any[]>(environment.apiUrl + '/log/all').subscribe(data => this.eventos = data);
  }

}
