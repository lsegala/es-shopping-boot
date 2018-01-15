import { Injectable } from '@angular/core';
import {Client} from "elasticsearch";

@Injectable()
export class ShoppingService {
  index: string = 'shopping';
  type: string = 'produtos';

  constructor() { }

  private createClient(){
    return new Client({
      host: 'http://localhost:9200',
      apiVersion: '5.5'
    });
  }

  getItens(query: string, filtrosSelecionados: any[], first: number, size: number){
    let client = this.createClient();
    if(!query){
      return this.getTodosItens(filtrosSelecionados, first, size);
    }
    return client.search({
      index: this.index,
      type: this.type,
      from: first,
      size: size,
      body: {
        query: {
          match: {
            _all: query
          }
        },
        aggs: {
          categoria_agg: {
            terms: {
              field: 'breadcrumps.keyword'
            }
          }
        }
      }
    });
  }

  getTodosItens(filtrosSelecionados: any[], first: number, size: number){
    let client = this.createClient();
    let params = {
      index: this.index,
      type: this.type,
      from: first,
      size: size,
      body: {
        query: {
          bool: {
            must: [
              {
                "match_all": {}
              }
            ]
          }
        },
        aggs: {
          categoria_agg: {
            terms: {
              field: 'breadcrumps.keyword'
            }
          }
        }
      }
    };
    if(filtrosSelecionados){
      params.body.query.bool["filter"] = [];
      filtrosSelecionados.forEach(termo => {
        params.body.query.bool["filter"].push({
          term: {
            "breadcrumps.keyword": termo
          }
        })
      });
    }
    return client.search(params);
  }

  voceQuisDizer(texto){
    let client = this.createClient();
    let params = {
      index: this.index,
      type: this.type,
      size: 0,
      body: {
        suggest:{
          voceQuisDizer:{
            text: texto,
            phrase: {
              field: 'voceQuisDizer'
            }
          }
        }
      }
    };
    return client.search(params);
  }

  autoComplete(texto){
    let client = this.createClient();
    let params = {
      index: this.index,
      type: this.type,
      size: 0,
      body: {
        aggs: {
          autocomplete: {
            terms: {
              field: 'autocomplete',
              size: 2,
              include: texto+'.*'
            }
          }
        }
      }
    };
    return client.search(params);
  }
}
