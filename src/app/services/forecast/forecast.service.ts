import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Forecast} from '../../model/forecast';
import {HttpClient} from '@angular/common/http';
import {ForecastAdapter} from '../adapter/forecast-adapter';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

    url = 'http://localhost:8080/forecast';

  constructor(private http: HttpClient,
              private forecastAdapter: ForecastAdapter) { }

  public getForecast(city: string): Observable<Forecast> {
    return this.http.get(this.url + '?city=' + city)
      .pipe(
        map((data: any) => this.forecastAdapter.adapt(data))
      );
  }


}
