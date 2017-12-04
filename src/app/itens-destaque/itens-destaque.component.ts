import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens-destaque',
  templateUrl: '/app/itens-destaque/itens-destaque.component.html',
  styleUrls: ['/app/itens-destaque/itens-destaque.component.css']
})
export class ItensDestaqueComponent implements OnInit {
  itens : any = [];

  constructor() { }

  ngOnInit() {
    this.itens = [{
      thumb: "https://mlb-s2-p.mlstatic.com/167115-MLB25151568263_112016-I.jpg",
      descricao: "Suspensório para casamento",
      link: "#",
      preco: 0.0
    },{
      thumb: "https://mlb-s2-p.mlstatic.com/198211-MLB20514985292_122015-I.jpg",
      descricao: "Capa de celular para Moto X Style",
      link: "#",
      preco: 0.0
    }];
  }

  tratarAvaliacao(event : any) {
    console.log(event);
  }
}
