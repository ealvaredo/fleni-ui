import { Component, OnInit } from '@angular/core';
import { FreeviewService } from '../freeview.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-freeviewpatients',
  templateUrl: './freeviewpatients.component.html',
  styleUrls: ['./freeviewpatients.component.css']
})
export class FreeviewpatientsComponent implements OnInit {

  dir: String;
  patients: String[];

  constructor(private service: FreeviewService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.dir = params['dir'];
      this.service.loadPatients(this.dir).subscribe(data => this.patients = data);  
  });

  }

  onFreeView(patient: String) {

    this.service.freeView(this.dir, patient).subscribe();

  }

}
