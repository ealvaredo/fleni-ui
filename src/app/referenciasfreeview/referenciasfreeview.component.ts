import { Component, OnInit, Input } from '@angular/core';
import {Annotation} from '../model/Annotation';

@Component({
  selector: 'app-referenciasfreeview',
  templateUrl: './referenciasfreeview.component.html',
  styleUrls: ['./referenciasfreeview.component.css']
})
export class ReferenciasfreeviewComponent implements OnInit {

  @Input() annotations: Annotation[];


  constructor() { }

  ngOnInit() {
  }

}
