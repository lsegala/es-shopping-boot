import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  InputTextModule, ButtonModule, DataTableModule, DialogModule, DataGridModule,
  PanelModule, RatingModule, MenuModule, AutoCompleteModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import {ItensComponent} from "./itens/itens.component";
import {ItensDestaqueComponent} from "./itens-destaque/itens-destaque.component";
import {MenuComponent} from "./menu/menu.component";
import {MenuLatComponent} from "./menu-lat/menu-lat.component";
import {ThumbnailComponent} from "./thumbnail/thumbnail.component";
import {ShoppingService} from "./services/shopping.service";

@NgModule({
  declarations: [
    AppComponent, ItensComponent, ItensDestaqueComponent, MenuComponent, MenuLatComponent, ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    DataGridModule,
    PanelModule,
    HttpModule,
    InputTextModule,
    AutoCompleteModule,
    DialogModule,
    ButtonModule,
    RatingModule,
    MenuModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
