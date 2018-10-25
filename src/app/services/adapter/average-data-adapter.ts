import {Adapter} from './adapter';
import {AverageData} from '../../model/average-data';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AverageDataAdapter implements Adapter<AverageData> {

  adapt(item: any): AverageData {
    const result: AverageData = new AverageData();
    result.temperature = item.temperatureAverage;
    result.dewPoint = item.dewPointAverage;
    result.windChill = item.windChillAverage;
    result.relativeHumidity = item.relativeHumidityAverage;
    result.atmosphericPressure = item.atmosphericPressureAverage;
    result.precipitation = item.precipitationAverage;
    result.windSpeed = item.windSpeedAverage;
    result.windGustSpeed = item.windGustSpeedAverage;
    return result;
  }

}
