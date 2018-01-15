import {Component, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-menu-lat',
  templateUrl: './menu-lat.component.html',
  styleUrls: ['./menu-lat.component.css']
})
export class MenuLatComponent {
  @Input() items: MenuItem[];

  constructor() {}
}
