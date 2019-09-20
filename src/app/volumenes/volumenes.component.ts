import { Component, OnInit, Input } from '@angular/core';
import { FreesurferComparedMeasureStat } from '../model/FreesurferComparedMeasureStat';

@Component({
  selector: 'app-volumenes',
  templateUrl: './volumenes.component.html',
  styleUrls: ['./volumenes.component.css']
})
export class VolumenesComponent implements OnInit {

  @Input() volumenes: FreesurferComparedMeasureStat;


  constructor() { }

  ngOnInit() {
  }

}
