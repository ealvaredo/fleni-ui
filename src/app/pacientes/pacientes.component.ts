import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  @Input() patients: Patient[];
  @Input() titulo: string;
  @Output() onEstudios: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSearchChange: EventEmitter<string> = new EventEmitter<string>();
  

  busqueda: string;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.busqueda = "";
  }

  verEstudios(paciente: string): void {
   console.log(paciente);
    this.onEstudios.emit(paciente);
  }

  buscar(text: string): void {
    console.log(text);
    this.busqueda = text;
    this.onSearchChange.emit(text);
  }  
  
  deletePatient(idPaciente: string) {
    this.patientService.delete(idPaciente).subscribe(data => this.buscar(this.busqueda));
  }


  patologico(idPaciente: string) {
    this.patientService.patologico(idPaciente).subscribe(data => this.buscar(this.busqueda));
  }

  sano(idPaciente: string) {
    this.patientService.sano(idPaciente).subscribe(data => this.buscar(this.busqueda));
  }

  priorizar(idPaciente: string) {
    this.patientService.priorizarPaciente(idPaciente).subscribe(data => this.buscar(this.busqueda));
  }


  cognitivo(idPaciente: string) {
    this.patientService.cognitivo(idPaciente).subscribe(data => this.buscar(this.busqueda));
  }

  nocognitivo(idPaciente: string) {
    this.patientService.nocognitivo(idPaciente).subscribe(data => this.buscar(this.busqueda));
  }


}
