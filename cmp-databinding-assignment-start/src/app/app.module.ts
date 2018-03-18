import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EvenNumberComponent} from './number/even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import {OddNumberComponent} from './number/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenNumberComponent,
    OddNumberComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
