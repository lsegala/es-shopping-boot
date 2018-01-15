import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ShoppingService} from "./services/shopping.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
		query: string;
		itens : any = [];
		total: number = 0;
		pageSize: number = 10;
		categorias: any = [];
		filtrosSelecionados: any = [];
		sugestoes: any = [];

		constructor(private shoppingService: ShoppingService) {}

		ngAfterViewInit(): void {
      this.carregarItens({
        first: 0,
        size: this.pageSize
      });
		}

    carregarItens(event) {
		  let self = this;
      this.shoppingService.getItens(this.query, self.filtrosSelecionados, event.first, event.size)
        .then(itens => {
          this.itens = itens.hits.hits.map(o => o._source);
          if(!this.itens || this.itens.length === 0){
            this.shoppingService.voceQuisDizer(this.query)
              .then(resposta => {
                if(resposta['suggest']) {
                  this.sugestoes = resposta['suggest'].voceQuisDizer[0].options.map(o => o.text);
                }
              });
          }
          this.categorias = itens.aggregations.categoria_agg.buckets.map(bucket => {
            return {
              label: bucket.key+' ('+bucket.doc_count+')',
              icon: 'fa-filter',
              command: (event) => {
                self.filtrosSelecionados.push(event.item.label.replace(/(.*?) \([0-9]+\)/g, '$1'));
                self.carregarItens({first: 0, size: this.pageSize});
              }
            };
          });
          this.total = itens.hits.total;
        });
    }

		onBuscaRealizada(texto: string) {
			this.query = texto;
			this.carregarItens({first: 0, size: this.pageSize});
		}
}
