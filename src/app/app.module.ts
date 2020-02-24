import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxsModule, Store } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { SearchBarComponent } from "./Features/search-bar/search-bar.component";
import { ForecastListComponent } from "./Features/forecast-list/forecast-list.component";
import { ForecastItemComponent } from "./Features/forecast-item/forecast-item.component";
import { HumidityInfoComponent } from "./Features/humidity-info/humidity-info.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MeteoDataState } from "./State/MeteoData.state";
import { MeteoOptionState } from "./State/MeteoOption.state";

import { CustomDate } from "./Shared/Pipes/custom-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ForecastListComponent,
    ForecastItemComponent,
    HumidityInfoComponent,
    CustomDate
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([MeteoDataState, MeteoOptionState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
