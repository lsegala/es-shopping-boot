Agora que já estamos conseguindo exibir os resultados, é preciso navegar pelos resultados

app.module.ts
```typescript
...
imports: [
  ...
  BreadcrumbModule,
  GalleriaModule,
  AccordionModule
]
```

app.component.ts
```typescript
export class AppComponent implements OnInit{
  ...
  rows = 12;
  total = 0;
  page = 0;
  ...
  ngOnInit(): void {
    ...
    .then(itens => {
      this.total = itens.hits.total;
    ...
      label: bucket.key + ' (' + bucket.doc_count + ')',
      icon: 'fa-filter',
      command: (event) => {
        this.filtro = event.item.label.replace(/(.*)( \(.*\))/, '$1');
    ...
  }
  ...  
  onBuscaRealizada(queryValue: string) {
    this.query = queryValue;
    this.ngOnInit();
  }
  ...
}
```

app.component.html
```html
...
<app-itens *ngIf="exibirItens" [itens]="itens" [rows]="rows" [total]="total" (carregarItensEvent)="onCarregarItens($event)"></app-itens>
...
```

shopping.service.ts
```typescript
public getItens(query: string, filtro: string, page: number, rows: number) {
  ...
  type: this.type,
  from: page,
  size: rows,
  ...
    terms: {
      field: 'breadcrumps.keyword'
    }
  ...
  parameters['body'].query.bool.filter.term['breadcrumps.keyword'] = filtro;
  ...
}
```

itens.component.ts
```typescript
export class ItensComponent implements OnInit {
  ...
  @Input() rows: number;
  @Input() total: number;
  @Output() carregarItensEvent = new EventEmitter();
  ...
  carregarItens(event) {
    this.carregarItensEvent.emit(event);
  }
}
```

itens.component.html
```html
<p-dataGrid [value]="itens" [paginator]="true" [rows]="rows" [lazy]="true" [totalRecords]="total" (onLazyLoad)="carregarItens($event)">
...
```

detalhe.component.ts
```typescript
export class DetalheComponent implements OnInit {
  ...
  breadcrumbs: MenuItem[] = [];
  imagens: any[] = [];
  ...
  .then(response => {
    this.item = response._source;
    this.breadcrumbs = this.item.breadcrumps.map(categoria => {
      return {
        label: categoria
      };
    });
    this.imagens = this.item.imagens.map(src => {
      return {
        source: src
      };
    });
  ...
```

detalhe.component.html
```html
<p-breadcrumb [model]="breadcrumbs"></p-breadcrumb>
<p-panel>
  ...
  <p *ngIf="imagens.length">
    <p-galleria [images]="imagens"></p-galleria>
  </p>
  <p-accordion>
    <p-accordionTab header="Preço" [selected]="true">
      R$ {{item.preco|number}}
    </p-accordionTab>
    <p-accordionTab header="Características">
      <div [innerHTML]="item.caracteristicas">
      </div>
    </p-accordionTab>
    <p-accordionTab header="Descrição">
      <div [innerHTML]="item.descricao">
      </div>
    </p-accordionTab>
  </p-accordion>
</p-panel>
```

detalhe.component.css
```css
img.ui-panel-images{
  height: 100%;
}
```

```
```

```
```

```
```

```
```

```
```
