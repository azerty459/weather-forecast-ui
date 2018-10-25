import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AverageData} from '../../../../model/average-data';
import {ForecastHoursDetailed} from '../../../../model/forecast-hours-detailed';

@Component({
  selector: 'app-average-details',
  templateUrl: './average-details.component.html',
  styleUrls: ['./average-details.component.scss']
})
export class AverageDetailsComponent implements OnInit, OnChanges {

  @Input() averageData: AverageData;
  dataSource: AverageData[];
  columns: any[];
  displayedColumns: string[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.createMatTable();
  }

  createMatTable() {
    this.columns = [
      {columnDef: 'temperature', header: 'Température',
        cell: (element: AverageData) => this.getDisplayableAverage(element.temperature)},
      {columnDef: 'dewPoint', header: 'Point de rosée',
        cell: (element: AverageData) => this.getDisplayableAverage(element.dewPoint)},
      {columnDef: 'windChill', header: 'Refroidissement éolien',
        cell: (element: AverageData) => this.getDisplayableAverage(element.windChill)},
      {columnDef: 'relativeHumidity', header: 'Humidité relative',
        cell: (element: AverageData) => this.getDisplayableAverage(element.relativeHumidity)},
      {columnDef: 'atmosphericPressure', header: 'Pression atmosphérique',
        cell: (element: AverageData) => this.getDisplayableAverage(element.atmosphericPressure)},
      {columnDef: 'precipitation', header: 'Précipitation',
        cell: (element: AverageData) => this.getDisplayableAverage(element.precipitation)},
      {columnDef: 'windSpeed', header: 'Vitesse du vent',
        cell: (element: AverageData) => this.getDisplayableAverage(element.windSpeed)},
      {columnDef: 'windGustSpeed', header: 'Rafale de vent',
        cell: (element: AverageData) => this.getDisplayableAverage(element.windGustSpeed)},
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
    this.dataSource = [this.averageData];
  }

  getDisplayableAverage(average: number) {
    if (average != null) {
      return average.toFixed(2) + '';
    } else {
      return '?';
    }
  }
}
