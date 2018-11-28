import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectNameComponent } from './select-name/select-name.component';
import {FormsModule} from '@angular/forms';
import { InputSelectColorComponent } from './input-select-color/input-select-color.component';
import { ColorChildComponent } from './input-select-color/color-child/color-child.component'
@NgModule({
  declarations: [
    AppComponent,
    SelectNameComponent,
    InputSelectColorComponent,
    ColorChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
