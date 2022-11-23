import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CacheService} from "./cache.service";
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
