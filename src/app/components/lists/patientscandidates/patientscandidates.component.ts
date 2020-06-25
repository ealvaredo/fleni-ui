import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/app/Patient';

@Component({
  selector: 'app-patientscandidates',
  templateUrl: './patientscandidates.component.html',
  styleUrls: ['./patientscandidates.component.css']
})
export class PatientscandidatesComponent implements OnInit {

  @Input() patient: Patient;
  @Input() patients: Patient[];
  @Input() criterio: string;
  @Input() tipoComparacion: string;
  @Output() onComparar: EventEmitter<string> = new EventEmitter<string>();
  @Output() onVolver: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  volver() {
    this.onVolver.emit();
  }

  comparar() {
    this.onComparar.emit();
  }

}
