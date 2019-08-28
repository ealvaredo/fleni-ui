import { Component, OnInit } from '@angular/core';
import { ImportdatabaseService } from '../importdatabase.service';
import {Database} from '../model/Database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  databases: Database[];

  constructor(private service: ImportdatabaseService,
    private router: Router) { }

  ngOnInit() {
    
    this.service.getDatabases().subscribe(data => this.databases = data);
  }

  onEdit(id: string) {
    this.router.navigate(['/databases/database', id]);
  }

  onPatients(id: string) {
    this.router.navigate(['/databases/database/patient',  id]);
  }

  onDelete(id: string) {
    this.service.delete(id).subscribe(data => this.ngOnInit());
  }

  volver() : void {
    this.router.navigate(['/launcher']);
  }



}
