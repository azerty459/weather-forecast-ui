import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Forecast } from "../Model/Forecast";
import { HumidityDetails } from "../Model/HumidityDetails";
import { Store } from "@ngxs/store";
import {
  SetForecasts,
  SetHottestDay,
  SetRainyDays,
  SetHumidityDetails
} from "src/app/Action/MeteoData.action";

@Injectable({
  providedIn: "root"
})
export class MeteoService {
  constructor(private http: HttpClient, private store: Store) {}

  fetchForecasts(ville: String) {
    this.http
      .get<Forecast[]>("http://localhost:8080/api/meteo/" + ville)
      .toPromise<Forecast[]>()
      .then(result => {
        this.store.dispatch(new SetForecasts(result));
      });
  }

  fetchHottestDay(ville: String) {
    this.http
      .get<Forecast>("http://localhost:8080/api/meteo/" + ville + "/hottestday")
      .toPromise<Forecast>()
      .then(result => {
        this.store.dispatch(new SetHottestDay(result));
      });
  }

  fetchRainyDays(ville: String) {
    this.http
      .get<Forecast[]>(
        "http://localhost:8080/api/meteo/" + ville + "/rainydays"
      )
      .toPromise<Forecast[]>()
      .then(result => {
        this.store.dispatch(new SetRainyDays(result));
      });
  }

  fetchHumidityDetails(ville: String) {
    this.http
      .get<HumidityDetails>(
        "http://localhost:8080/api/meteo/" + ville + "/humidityStats"
      )
      .toPromise<HumidityDetails>()
      .then(result => {
        this.store.dispatch(new SetHumidityDetails(result));
      });
  }
}
