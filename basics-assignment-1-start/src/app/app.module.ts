import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning-alert/warning-alert.component';
import { SuccessComponent } from './success-alert/success-alert.component';
import { DangerComponent } from './danger-alert/danger-alert.component';
import { AlertDashboardComponent } from './alert-dashboard/alert-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    DangerComponent,
    AlertDashboardComponent
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
