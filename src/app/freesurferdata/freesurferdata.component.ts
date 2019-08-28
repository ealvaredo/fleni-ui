import { Component, OnInit } from '@angular/core';
import { FreeviewService } from '../freeview.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-freesurferdata',
  templateUrl: './freesurferdata.component.html',
  styleUrls: ['./freesurferdata.component.css']
})
export class FreesurferdataComponent implements OnInit {

  databases: String[];

  constructor(private service: FreeviewService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.service.all().subscribe(
      data => this.databases = data, error => this.router.navigate(['/error']));
  }

  onPatients(dir: String) {
    this.router.navigate(['/freeview/database',  dir]);
  }


}
