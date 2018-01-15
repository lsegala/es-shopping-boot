import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {
  @Input() itens : any;
  @Input() total: number;
  @Input() pageSize: number;
  @Output() onCarregarItens = new EventEmitter();

  constructor() { }

  carregarItens(event) {
    this.onCarregarItens.emit(event);
  }
}
