import { Component, OnInit, Input } from '@angular/core';
import { FreesurferComparedAsegStat } from '../model/FreesurferComparedAsegStat';
import { FreesurferComparedStats } from '../model/FreesurferComparedStats';

@Component({
  selector: 'app-asegstats',
  templateUrl: './asegstats.component.html',
  styleUrls: ['./asegstats.component.css']
})
export class AsegstatsComponent implements OnInit {

  @Input() aseg : FreesurferComparedAsegStat[];

  constructor() { }

  ngOnInit() {
  }

}
