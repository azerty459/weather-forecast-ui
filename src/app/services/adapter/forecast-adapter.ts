import {Adapter} from './adapter';
import {Forecast} from '../../model/forecast';
import {Injectable} from '@angular/core';
import {CurrentConditionAdapter} from './current-condition-adapter';
import {DayForecastAdapter} from './day-forecast-adapter';
import {DayForecast} from '../../model/day-forecast';

@Injectable({
  providedIn: 'root'
})

export class ForecastAdapter implements Adapter<Forecast> {

  constructor(
    private currentConditionAdapter: CurrentConditionAdapter,
    private dayForecastAdapter: DayForecastAdapter
  ) {
  }

  adapt(item: any): Forecast {
    const result: Forecast = new Forecast();
    result.currentCondition = this.currentConditionAdapter.adapt(item.currentCondition);
    result.daysForecast = [];
    item.daysForecast.forEach(
      df => {
        result.daysForecast.push(this.dayForecastAdapter.adapt(df));
      }
    );
    return result;
  }

}
