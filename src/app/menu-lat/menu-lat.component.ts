import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-menu-lat',
  templateUrl: '/app/menu-lat/menu-lat.component.html',
  styleUrls: ['/app/menu-lat/menu-lat.component.css']
})
export class MenuLatComponent implements OnInit {
  items : MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: "Roupas"
    },{
      label: "Calçados"
    },{
      label: "Bolsas"
    },{
      label: "Celulares e Acessórios"
    },{
      label: "Áudio e Vídeo"
    }];
  }

}
