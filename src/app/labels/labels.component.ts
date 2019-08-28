import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nuevoLabel() {
    this.router.navigate(['/label']);
  }

}
