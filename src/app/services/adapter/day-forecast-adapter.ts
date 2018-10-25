import {Adapter} from './adapter';
import {DayForecast} from '../../model/day-forecast';
import {Injectable} from '@angular/core';
import {ForecastHourDetailedAdapter} from './forecast-hour-detailed-adapter';
import {AverageDataAdapter} from './average-data-adapter';

@Injectable({
  providedIn: 'root'
})

export class DayForecastAdapter implements Adapter <DayForecast> {

  constructor(
    private forecastsHoursDetailedAdapter: ForecastHourDetailedAdapter,
    private averageDataAdapter: AverageDataAdapter
  ) {
  }

  adapt(item: any): DayForecast {
    const result: DayForecast = new DayForecast();
    result.condition = item.condition;
    result.icon = item.icon;
    result.date = this.parseStringDate(item.date);
    result.forecastsHoursDetailed = [];
    item.hourlyDatas.forEach(
      fhd => result.forecastsHoursDetailed.push(fhd)
    );
    result.averageData = this.averageDataAdapter.adapt(item.averageData);
    result.maxTemperature = item.maxTemperature;
    result.minTemperature = item.minTemperature;
    return result;
  }

  parseStringDate(stringDate: string): Date {
    const dateParts = stringDate.split('.');
    return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
  }
}
