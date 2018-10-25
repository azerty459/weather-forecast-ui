import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material.module';
import { ForecastComponent } from './components/forecast/forecast.component';
import { CurrentConditionComponent } from './components/forecast/current-condition/current-condition.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DayForecastComponent } from './components/forecast/day-forecast/day-forecast.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HoursDetailsComponent } from './components/forecast/day-forecast-details/hours-details/hours-details.component';
import { AverageDetailsComponent } from './components/forecast/day-forecast-details/average-details/average-details.component';
import { DayForecastDetailsComponent } from './components/forecast/day-forecast-details/day-forecast-details.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ForecastComponent,
    CurrentConditionComponent,
    DayForecastComponent,
    HoursDetailsComponent,
    AverageDetailsComponent,
    DayForecastDetailsComponent,
    SettingsDialogComponent
  ],
  entryComponents: [SettingsDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
