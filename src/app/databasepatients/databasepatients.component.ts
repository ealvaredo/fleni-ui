import { Component, OnInit } from '@angular/core';
import { ImportdatabaseService } from '../importdatabase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { Database } from '../model/Database';

@Component({
  selector: 'app-databasepatients',
  templateUrl: './databasepatients.component.html',
  styleUrls: ['./databasepatients.component.css']
})
export class DatabasepatientsComponent implements OnInit {

 id: string;
 patients: Patient[];
 database: Database;

  constructor(private service: ImportdatabaseService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.load(this.id).subscribe(data => this.database = data);  
      this.service.loadPatients(this.id).subscribe(data => this.patients = data);
  });
  }

  onDti(id: string) {
    
    this.service.toDti(id).subscribe(
      d => console.log("se guardo"), 
      error => this.router.navigate(['/error']), 
      () => this.router.navigate(['/databases/database/patient/' + this.id]));

  }

  onTrackVis(id: string) {
    this.service.trackVis(id).subscribe(
      d => console.log("se abrió"), 
      error => this.router.navigate(['/error']), 
      () => this.router.navigate(['/databases/database/patient/' + this.id]));
  }

 
  volver() : void {
    this.router.navigate(['/databases']);
  }

}
