import { Component, OnInit } from '@angular/core';
import {LabelserviceService} from '../labelservice.service';
import {Label} from '../model/Label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  label: Label;

  constructor(private labelService: LabelserviceService) {

    //Inicializamos la variable del formulario
    this.label = new Label();
   }

  ngOnInit() {
  }


  save() {
    console.log("Se va a guardar label: " + this.label.name);
  }


}
