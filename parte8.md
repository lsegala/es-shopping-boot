Nosso objetivo aqui é ir além da busca. Iremos implementar a funcionalidade de completar automaticamente e
caso o usuário tenha digitado a palavra de forma errada, poderemos realizar sugestões.

app.module.ts
```typescript
imports: [
...
AutoCompleteModule,
...
]
```

app.component.ts
```typescript
export class AppComponent implements OnInit {
  ...
  sugestoes: any[] = [];
  ...
  ngOnInit(): void {
    ...
    if (this.itens && this.itens.length) {
      this.categorias = itens.aggregations.categoria_agg.buckets.map(bucket => {
        return {
          label: bucket.key + ' (' + bucket.doc_count + ')',
          icon: 'fa-filter',
          command: (event) => {
            this.filtro = event.item.label.replace(/(.*)( \(.*\))/, '$1');
            this.router.navigate(['/']);
            this.ngOnInit();
          }
        };
      });
    } else {
      this.service.voceQuisDizer(this.query)
        .then(resposta => {
          if (resposta['suggest']) {
            this.sugestoes = resposta['suggest'].voceQuisDizer[0].options.map(o => o.text);
          }
        });
    }
     ...
  }
}
```

app.component.html
```html
...
  <div class="col-md-10">
    <div *ngIf="exibirItens">
      <app-itens [itens]="itens" [rows]="rows" [total]="total" (carregarItensEvent)="onCarregarItens($event)" *ngIf="total"></app-itens>
      <div *ngIf="!total">
        Nenhum resultado encontrado.
      </div>
      <div *ngIf="!total && sugestoes.length">
        Voc&ecirc; n&atilde;o quis dizer:
        <ul id="voceQuisDizer">
          <li *ngFor="let termo of sugestoes"><strong>{{termo}}</strong></li>
        </ul>
        ?
      </div>
    </div>
    <router-outlet *ngIf="!exibirItens"></router-outlet>
  </div>
...
```

app.component.css
```css
#voceQuisDizer {
  display: inline;
  list-style: none;
}

#voceQuisDizer li {
  display: inline;
}

#voceQuisDizer li:after {
  content: " ou ";
}

#voceQuisDizer li:last-child:after {
  content: "";
}
```

menu.component.ts
```typescript
export class MenuComponent {
  ...
  sugestoes: string[];

  constructor(private shoppingService: ShoppingService, private router: Router) { }

  ...

  sugerir(event) {
    this.shoppingService.autoComplete(event.query)
      .then(resposta => {
        if (resposta.aggregations.autocomplete.buckets.length) {
          this.sugestoes = [resposta.aggregations.autocomplete.buckets.pop().key];
        }
      });
  }
}
```

menu.component.html
```html
<!--<input pInputText [(ngModel)]="query"...-->
<p-autoComplete [style]="{'width':'100%'}" [inputStyle]="{'width':'100%'}" [(ngModel)]="query" [suggestions]="sugestoes" (completeMethod)="sugerir($event)" (keyup.enter)="buscar()"></p-autoComplete>
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
