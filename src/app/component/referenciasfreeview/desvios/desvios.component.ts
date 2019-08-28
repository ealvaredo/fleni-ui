import { Component, OnInit, Input } from '@angular/core';
import { ReferenciaColores } from '../../../model/ReferenciaColores';

@Component({
  selector: 'app-desvios',
  templateUrl: './desvios.component.html',
  styleUrls: ['./desvios.component.css']
})
export class DesviosComponent implements OnInit {

  @Input() colores: ReferenciaColores[];
  @Input() title: String;
  @Input() desvioMax: Number;
  @Input() desvioMin: Number;
  @Input() negativo: Boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
