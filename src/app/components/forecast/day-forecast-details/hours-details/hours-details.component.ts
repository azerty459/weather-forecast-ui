import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DayForecast} from '../../../../model/day-forecast';
import {ForecastHoursDetailed} from '../../../../model/forecast-hours-detailed';

@Component({
  selector: 'app-hours-details',
  templateUrl: './hours-details.component.html',
  styleUrls: ['./hours-details.component.scss']
})
export class HoursDetailsComponent implements OnInit, OnChanges {

  @Input() forecastsHoursDetailed: ForecastHoursDetailed[];
  dataSource: ForecastHoursDetailed[];
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
      {columnDef: 'hour', header: 'Heure',
        cell: (element: ForecastHoursDetailed) =>  this.getDisplayableCell(element.hour) + 'h00'},
      {columnDef: 'condition', header: 'Condition'},
      {columnDef: 'temp', header: 'Température',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.temp)},
      {columnDef: 'atmosphericPressure', header: 'Pression',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.atmosphericPressure)},
      {columnDef: 'dewPoint', header: 'Point de rosée',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.dewPoint)},
      {columnDef: 'precipitation', header: 'Précipitations',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.precipitation)},
      {columnDef: 'relativeHumidity', header: 'Humidité',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.relativeHumidity)},
      {columnDef: 'windChill', header: 'Refroidissement éolien',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.windChill)},
      {columnDef: 'windDirectionCardinal', header: 'Direction du vent',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.windDirectionCardinal)},
      {columnDef: 'windDirectionDegree', header: 'Direction du vent (valeur précise)',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.windDirectionDegree)},
      {columnDef: 'windGustSpeed', header: 'Vitesse du vent en rafale',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.windGustSpeed)},
      {columnDef: 'windSpeed', header: 'Vitesse du vent',
        cell: (element: ForecastHoursDetailed) => this.getDisplayableCell(element.windSpeed)},
    ];
    this.displayedColumns = this.columns.map(c => c.columnDef);
    this.dataSource = this.forecastsHoursDetailed;
  }

  getDisplayableCell(cellContent: any) {
    if (cellContent == null) {
      return '?';
    } else {
      return cellContent + '';
    }
  }

}
