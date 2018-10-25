import {Adapter} from './adapter';
import {ForecastHoursDetailed} from '../../model/forecast-hours-detailed';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastHourDetailedAdapter implements Adapter<ForecastHoursDetailed>  {

  adapt(item: any): ForecastHoursDetailed {
    const result: ForecastHoursDetailed = new ForecastHoursDetailed();
    result.hour = item.hour;
    result.icon = item.icon;
    result.condition = item.condition;
    result.temp = item.temp;
    result.dewPoint = item.dewPoint;
    result.windChill = item.windChill;
    result.relativeHumidity = item.relativeHumidity;
    result.atmosphericPressure = item.atmosphericPressure;
    result.precipitation = item.precipitation;
    result.windSpeed = item.windSpeed;
    result.windGustSpeed = item.windGustSpeed;
    result.windDirectionDegree = item.windDirectionDegree;
    result.windDirectionCardinal = item.windDirectionCardinal;
    return result;
  }

}
