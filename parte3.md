Fazendo a ligação entre a classe de serviço e o backend do elasticsearch

Modifique o arquivo elasticsearch.yml
```yaml
http.cors.enabled: true
http.cors.allow-origin: "*"
```

Crie os dados pelo kibana
```json
PUT /_bulk
{ "index" : { "_index" : "shopping", "_type" : "itens"} }
{ "preco" : 10, "titulo": "titulo 1", "thumbnail": "", "categoria": "Categoria 1", "descricao": "descrição do produto 1" }
{ "index" : { "_index" : "shopping", "_type" : "itens"} }
{ "preco" : 20, "titulo": "titulo 2", "thumbnail": "", "categoria": "Categoria 2", "descricao": "descrição do produto 2" }
```

Modifique a classe shopping.service.ts
```typescript
import { Injectable } from '@angular/core';
import {Client} from 'elasticsearch';

@Injectable()
export class ShoppingService {
  index = 'shopping';
  type = 'itens';

  constructor() { }

  private createClient() {
    return new Client({
      host: 'http://<IP_HOST>:9200',
      apiVersion: '<SUA_VERSAO_ELASTICSEARCH_API>'
    });
  }

  public getItens() {
    return this.createClient().search({
      index: this.index,
      type: this.type,
      body: {
        query: {
          match_all: {}
        }
      }
    });
  }

  public getCategorias() {
    return this.createClient().search({
      index: this.index,
      type: this.type,
      size: 0,
      body: {
        query: {
          match_all: {}
        },
        aggs: {
          categoria_agg: {
            terms: {
              field: 'categoria.keyword'
            }
          }
        }
      }
    });
  }
}
```
