import {ForecastHoursDetailed} from './forecast-hours-detailed';
import {AverageData} from './average-data';

export class DayForecast {

  date: Date;
  minTemperature: number;
  maxTemperature: number;
  condition: string;
  icon: string;
  averageData: AverageData;
  forecastsHoursDetailed: ForecastHoursDetailed[];

  constructor() {
  }
}
