import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { InputTextModule, ButtonModule }  from 'primeng/primeng';
import { MenuComponent } from './menu/menu.component';
import { MenuLatComponent } from './menu-lat/menu-lat.component';
import {MenuModule} from "primeng/components/menu/menu";
import { ItensDestaqueComponent } from './itens-destaque/itens-destaque.component';
import { ItensComponent } from './itens/itens.component';
import {CarouselModule} from "primeng/components/carousel/carousel";
import {ScheduleModule} from "primeng/components/schedule/schedule";
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import {TooltipModule} from "primeng/components/tooltip/tooltip";
import {DataGridModule} from "primeng/components/datagrid/datagrid";
import {RatingModule} from "primeng/components/rating/rating";
import {PanelModule} from "primeng/components/panel/panel";

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, InputTextModule, ButtonModule, MenuModule,
                  CarouselModule, ScheduleModule, TooltipModule, DataGridModule, RatingModule, PanelModule ],
  declarations: [ AppComponent, MenuComponent, MenuLatComponent, ItensDestaqueComponent, ItensComponent, ThumbnailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
