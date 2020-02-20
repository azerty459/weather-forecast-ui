import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { MeteoDataState } from "src/app/State/MeteoData.state";
import { ForecastData } from "src/app/Core/Model/ForecastData";

@Component({
  selector: "app-forecast-list",
  templateUrl: "./forecast-list.component.html",
  styleUrls: ["./forecast-list.component.scss"]
})
export class ForecastListComponent implements OnInit {
  @Select(MeteoDataState) forecastData: Observable<ForecastData>;

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
