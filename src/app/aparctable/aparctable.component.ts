import { Component, OnInit, Input } from '@angular/core';
import { FreesurferComparedStat } from '../model/FreesurferComparedStat';

@Component({
  selector: 'app-aparctable',
  templateUrl: './aparctable.component.html',
  styleUrls: ['./aparctable.component.css']
})
export class AparctableComponent implements OnInit {

  @Input() stats: FreesurferComparedStat[];
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
