import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ForecastService} from '../../services/forecast/forecast.service';
import {Forecast} from '../../model/forecast';
import {map} from 'rxjs/operators';
import {DayForecast} from '../../model/day-forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnChanges {

  forecast: Forecast;
  dayForecastSelected: DayForecast;
  @Input() city;

  constructor(
    private forecastService: ForecastService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.reload();
  }

  reload() {
    this.forecastService.getForecast(this.city)
      .pipe(
        map(response => {
          this.forecast = response;
          this.dayForecastSelected = this.forecast.daysForecast[0];
        })
      )
      .subscribe(
        next => {},
        // TODO afficher snackbar d'erreur si la ville est inconnue (cad si le backend renvoie une erreur 500)

          error => {
          console.log('Ville inconnue');
        }
      );
  }

  changeDayForecastSelected(df: DayForecast) {
    this.dayForecastSelected = df;
  }

}
