import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {


  @Input() id: string;
  @Output() onFreeview: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCompararEspesorCortical: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCompararVolumen: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCompararArea: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }


  freeView() {
    this.onFreeview.emit();
  }

  compararEspesorCortical() {
    this.onCompararEspesorCortical.emit();
  }

  compararVolumen() {
    this.onCompararVolumen.emit();
  }

  compararArea() {
    this.onCompararArea.emit();
  }

}
