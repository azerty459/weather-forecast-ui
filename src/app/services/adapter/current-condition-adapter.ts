import {Adapter} from './adapter';
import {CurrentCondition} from '../../model/current-condition';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CurrentConditionAdapter implements Adapter<CurrentCondition> {
  adapt(item: any): CurrentCondition {
    const result: CurrentCondition = new CurrentCondition();
    result.condition = item.condition;
    result.date = item.date;
    result.hour = item.hour;
    result.humidity = item.humidity;
    result.pressure = item.pressure;
    result.temperature = item.temperature;
    result.windDirection = item.windDirection;
    result.windGustSpeed = item.windGustSpeed;
    result.windSpeed = item.windSpeed;
    result.icon = item.icon;
    return result;
  }
}
