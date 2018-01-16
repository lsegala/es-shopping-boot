import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() titulo : string;
  @Input() src : string;
  @Input() descricao : string;
  @Input() preco : number;

  constructor() { }

  ngOnInit() {
  }
}
