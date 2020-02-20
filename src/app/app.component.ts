import { Component } from "@angular/core";
import { MeteoOptionState, AppOptions } from "./State/MeteoOption.state";
import { MeteoDataState } from "./State/MeteoData.state";

import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { InfoType } from "./Shared/Enums/InfoType";
import { HumidityDetails } from "./Core/Model/HumidityDetails";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "meteoApp";
  regular = InfoType.regular;
  humidity = InfoType.humidity;

  @Select(MeteoOptionState) appOptions: Observable<AppOptions>;

  @Select(MeteoDataState.getHumidityDetails) humidityDetails: Observable<
    HumidityDetails
  >;

  constructor(private store: Store) {}
}
