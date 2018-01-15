import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  query: string;
  @Output() onBuscaRealizada = new EventEmitter<string>();
  sugestoes: string[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
  }

  enviarPesquisa(event) {
    if(event.key === "Enter"){
      this.buscar();
    }
  }

  buscar() {
    this.onBuscaRealizada.emit(this.query);
  }

  sugerir(event) {
    this.shoppingService.autoComplete(event.query)
      .then(resposta => {
        if(resposta.aggregations.autocomplete.buckets.length) {
          this.sugestoes = [resposta.aggregations.autocomplete.buckets.pop().key];
        }
      });
  }
}
