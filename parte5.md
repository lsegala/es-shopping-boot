Precisamos entender como funciona a navegação em uma SPA, por isso iremos criar uma página para exibirmos o detalhamento do produto.

Criação do novo componente
```cmd
ng g component Detalhe
```

Crie o arquivo app.routes.ts no mesmo diretório do app.module.ts
```typescript
import {RouterModule, Routes} from '@angular/router';
import {DetalheComponent} from './detalhe/detalhe.component';
import {ModuleWithProviders} from '@angular/core';
import {ItensComponent} from './itens/itens.component';

export const routes: Routes = [{
  path: '', component: ItensComponent
}, {
  path: 'detalhe/:id', component: DetalheComponent
}];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
```

app.module.ts
```typescript
  ...
  declarations: [
    ...
    DetalheComponent
  ]
  ...
  imports: [
    ...
    ButtonModule,
    AppRoutes
  ],
  ...
```

app.component.ts
```typescript
export class AppComponent implements OnInit{
  ...
  constructor(private router: Router, ...) {}

  get exibirItens() {
    return this.router.url === '/';
  }
  ...
  ngOnInit(): void {
    ...
    this.itens = itens.hits.hits.map(o => {
      const newObj = o._source;
      newObj.id = o._id;
      return newObj;
    });
    ...
    command: (event) => {
      this.filtro = event.item.label;
      this.router.navigate(['/']);
      this.ngOnInit();
    }
  }
  ...
}
```

app.component.html
```html
...
<app-itens *ngIf="exibirItens" [itens]="itens"></app-itens>
<router-outlet *ngIf="!exibirItens"></router-outlet>
...
```

detalhe.component.html
```html
<p-panel>
  <p-header>
    {{item.titulo}}
    <button pButton type="button" label="Voltar" style="float: right" routerLink="/"></button>
  </p-header>
  <p *ngIf="item.thumbnail">
    <img [src]="item.thumbnail">
  </p>
  <p>
    Preço: R$ {{item.preco|number}}
  </p>
  <p>
    {{item.descricao}}
  </p>
</p-panel>
```

detalhe.component.ts
```typescript
...
export class DetalheComponenet implements OnInit {
  item: any = {};
  
  constructor(private route: ActivatedRoute, private shoppingService: ShoppingService) {}
  
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.carregaDetalhe(params['id']);
      });
  }
  
  private carregaDetalhe(id: number) {
    this.shoppingService.getItens(id)
      .then(response => {
        this.item = response._source;
      })
  }
}
```

menu.component.html
```html
...
  <button class="btn btn-default" (click)="buscar()" routerLink="/">
...
```

menu.component.ts
```typescript
...
  buscar() {
    this.router.navigate(['/']);
    ...
  }
...
```

shopping.service.ts
```typescript
...
export class ShoppingService{
  ...
  public getItem(id) {
    const client = this.createClient();
    return client.get({
      index: this.index,
      type: this.type,
      id: id
    });
  }
}
```

thumbnail.component.html
```html
...
<a href="#" onclick="return false" (click)="detalhe()">
  <img [src]=.../>
  ...
</a>
...
```

thumbnail.component.ts
```typescript
export class ThumbnailComponent {
  ...
  constructor(private router: Router) {}
  ...
  detalhe() {
    this.router.navigate(['/detalhe', this.id]);
  }
}
```
