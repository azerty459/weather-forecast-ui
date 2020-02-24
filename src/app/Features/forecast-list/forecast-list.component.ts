import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { MeteoDataState } from "src/app/State/MeteoData.state";
import { ForecastData } from "src/app/Core/Model/ForecastData";
import { Forecast } from "src/app/Core/Model/Forecast";
import { MeteoOptionState, AppOptions } from "src/app/State/MeteoOption.state";
import { InfoType } from "src/app/Shared/Enums/InfoType";
import { ForecastDetail } from "src/app/Shared/Enums/ForecastDetail";

@Component({
  selector: "app-forecast-list",
  templateUrl: "./forecast-list.component.html",
  styleUrls: ["./forecast-list.component.scss"]
})
export class ForecastListComponent implements OnInit {
  @Select(MeteoDataState.getForecastData) forecastData: Observable<
    ForecastData
  >;
  @Select(MeteoOptionState) meteoOptions: Observable<AppOptions>;

  forecasts: Forecast[];
  hottestDayIndex: number;
  rainyDaysIndexes: number[];
  showHot: boolean;
  showRainy: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.forecastData.subscribe(fd => {
      this.forecasts = fd.forecasts;
      this.hottestDayIndex = fd.hottestDayIndex;
      this.rainyDaysIndexes = fd.rainyDaysIndexes;
    });
    this.meteoOptions.subscribe(options => {
      this.showHot = options.forecastDetail === ForecastDetail.heat;
      this.showRainy = options.forecastDetail === ForecastDetail.rain;
    });
  }
}
