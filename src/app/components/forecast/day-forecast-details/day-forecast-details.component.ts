import {Component, Input, OnInit} from '@angular/core';
import {DayForecast} from '../../../model/day-forecast';

@Component({
  selector: 'app-day-forecast-details',
  templateUrl: './day-forecast-details.component.html',
  styleUrls: ['./day-forecast-details.component.scss']
})
export class DayForecastDetailsComponent implements OnInit {

  @Input() dayForecast: DayForecast;

  constructor() { }

  ngOnInit() {
  }

}
