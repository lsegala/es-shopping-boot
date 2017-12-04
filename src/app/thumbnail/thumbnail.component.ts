import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: '/app/thumbnail/thumbnail.component.html',
  styleUrls: ['/app/thumbnail/thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() src : string;
  @Input() descricao : string;
  @Input() preco : number;
  avalicao : number;
  @Output() avaliacaoRealizada : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  avaliar(event : any) {
    this.avaliacaoRealizada.emit(event.value);
  }
}
