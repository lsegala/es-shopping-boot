Agora que temos nosso frontend em Angular se comunicando com o backend em Elasticsearch, precisamos dar funcionalidade 
ao campo de busca e de categorias.

Modifique os seguintes arquivos:

app.module.ts
```typescript
@NgModule(
  ...
  imports: [
    ...
    FormsModule
    ...
  ],
  ...
)
``` 

app.component.ts
```typescript
...
export class AppComponent implements OnInit{
  ...
  query: string;
  filtro: string;
  ...
  ngOnInit(): void {
    ...
    this.service.getItens(this.query, this.filtro)
    ...
    return {
      label: bucket.key,
      command: (event) => {
        this.filtro = event.item.label;
        this.ngOninit();
      }
    }
  }
  
  onBuscaRealizada(queryValue: string) {
    this.query = queryValue;
    this.ngOnInit();
  }
  
  onFiltroExcluido() {
    this.filtro = null;
    this.ngOnInit();
  }
}
```

app.component.html
```html
    ...
    <app-menu (buscaEvent)="onBuscaRealizada($event)"></app-menu>
    ...
    <app-menu-lat [itens]="categorias" [filtro]="filtro" (filtroExcluidoEvent)="onFiltroExcluido()"></app-menu-lat>
    ...
```

shopping.service.ts
```
import { Injectable } from '@angular/core';
import {Client} from 'elasticsearch';

@Injectable()
export class ShoppingService {
  index = 'shopping';
  type = 'itens';

  constructor() { }

  private createClient() {
    return new Client({
      host: 'http://192.168.0.48:9200',
      apiVersion: '5.5'
    });
  }

  public getItens(query: string, filtro: string) {
    const client = this.createClient();
    const parameters = {
      index: this.index,
      type: this.type,
      body: {
        query: {
          bool: {
            must: {
              match_phrase: {
                _all: query
              }
            }
          }
        },
        aggs: {
          categoria_agg: {
            terms: {
              field: 'categoria.keyword'
            }
          }
        }
      }
    };
    if (!query) {
      parameters.body.query = {
        bool: {
          must: {
            match_all: {}
          }
        }
      };
    } else {
      parameters.body.query = {
        bool: {
          must: {
            match_phrase: {
              _all: query
            }
          }
        }
      };
    }
    if (filtro) {
      parameters.body.query.bool.filter = {
        term: {}
      };
      parameters.body.query.bool.filter.term['categoria.keyword'] = filtro;
    }
    return client.search(parameters);
  }
}
```

menu-lat.component.ts
```typescript
export class MenuLatComponent{
  ...
  @Input() filtro: string;
  @Output() filtroExcluidoEvent = new EventEmitter();
  ...
  onFiltroExcluido() {
    this.filtroExcluidoEvent.emit();
  }
}
```

menu-lat.component.html
```html
<p-menu [model]="itens" *ngIf="!filtro"></p-menu>
<div *ngIf="filtro">Filtro: {{filtro}} <a href="#" (click)="onFiltroExcluido()"><span class="fa fa-close"></span></a></div>
```

menu.component.ts
```typescript
export class MenuComponent{
  ...
  @Output() buscaEvent = new EventEmitter<string>();
  ...
  buscar() {
    this.buscaEvent.emit(this.query);
  }
}
```
