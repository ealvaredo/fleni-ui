import { Component, OnInit } from '@angular/core';
import { ImportdatabaseService } from '../importdatabase.service';
import { Database } from '../model/Database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewdatabase',
  templateUrl: './viewdatabase.component.html',
  styleUrls: ['./viewdatabase.component.css']
})
export class ViewdatabaseComponent implements OnInit {

  database: Database = new Database();
  id: string;

  constructor(private service: ImportdatabaseService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.load(this.id).subscribe(data => this.database = data);  
  });
  }

  save() {

    this.service.save(this.database).subscribe( d => console.log("se guardo"), error => 
      this.router.navigate(['/error']), () => this.router.navigate(['/databases']));
  }

  volver() : void {
     this.router.navigate(['/databases']);
  }

}
