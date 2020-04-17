import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlauncher',
  templateUrl: './cardlauncher.component.html',
  styleUrls: ['./cardlauncher.component.css']
})
export class CardlauncherComponent implements OnInit {

 title: string = "";
 cantidad: number = 1;

  constructor() { }

  ngOnInit() {
  }

  ingresar() {

  }

}
