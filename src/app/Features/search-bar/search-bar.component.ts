import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import {
  SetVille,
  SetInfoType,
  SetForecastDetail
} from "src/app/Action/MeteoOption.action";
import { InfoType } from "src/app/Shared/Enums/InfoType";
import { ForecastDetail } from "src/app/Shared/Enums/ForecastDetail";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  ville: string;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  setVille() {
    this.store.dispatch(new SetVille(this.ville));
  }

  goToMeteo() {
    this.store.dispatch(new SetInfoType(InfoType.regular));
    this.store.dispatch(new SetForecastDetail(null));
  }

  goToHumidity() {
    this.store.dispatch(new SetInfoType(InfoType.humidity));
    this.store.dispatch(new SetForecastDetail(null));
  }

  showHottestDay() {
    this.store.dispatch(new SetInfoType(InfoType.regular));
    this.store.dispatch(new SetForecastDetail(ForecastDetail.heat));
  }
  showRainyDays() {
    this.store.dispatch(new SetInfoType(InfoType.regular));
    this.store.dispatch(new SetForecastDetail(ForecastDetail.rain));
  }
}
