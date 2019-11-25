import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

 eventos: any[];

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    return this.http.get<any[]>(environment.apiUrl + '/log/all').subscribe(data => this.eventos = data);
  }

  borarEventos() {

    return this.http.get<void>(environment.apiUrl + '/log/delete').subscribe(data => this.ngOnInit());

  }

  verSerie(id: string) {
    this.router.navigate(["/serie", id]);
  }

}
