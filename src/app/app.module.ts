import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InspecctionReportComponent } from './inspecction-report/inspecction-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuickEntryComponent } from './quick-entry/quick-entry.component';
import { ReportComponent } from './report/report.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InspecctionReportComponent,
    DashboardComponent,
    QuickEntryComponent,
    ReportComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
