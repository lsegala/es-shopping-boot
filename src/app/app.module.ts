import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { InputTextModule, ButtonModule }  from 'primeng/primeng';

@NgModule({
  imports:      [ BrowserModule, FormsModule, InputTextModule, ButtonModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
